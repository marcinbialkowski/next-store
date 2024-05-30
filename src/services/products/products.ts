import { unstable_cache as cache } from 'next/cache';
import {
  type Product,
  type ProductsListOptions,
  type GetProductsResult,
} from './products.types';
import { countProducts, selectProducts } from './products.utils';
import { prisma } from '@/db';

export const getProducts = cache(
  async (options: ProductsListOptions): Promise<GetProductsResult> => {
    const [products, total] = await prisma.$transaction(async (client) => [
      await selectProducts(client)(options),
      await countProducts(client)(options),
    ]);

    return {
      products,
      pagesCount: Math.ceil(total / options.pageSize),
    };
  },
  ['get-products'],
  { tags: ['products'] },
);

export const getRelatedProducts = cache(
  async (productSlug: Product['slug'], count: number): Promise<Product[]> => {
    const category = await prisma.category.findFirst({
      select: { id: true },
      where: { products: { some: { slug: productSlug } } },
    });

    if (!category) {
      return [];
    }

    const { products } = await getProducts({
      categoryId: category.id,
      pageSize: count + 1,
    });

    return products.filter(({ slug }) => slug !== productSlug).slice(0, count);
  },
  ['related-products'],
  { tags: ['products'] },
);

export const getProduct = cache(
  async (slug: Product['slug']): Promise<Product | null> => {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { primaryImage: true },
    });

    if (!product) {
      return null;
    }

    const aggregations = await prisma.review.aggregate({
      _avg: {
        rating: true,
      },
      where: {
        productId: product.id,
      },
    });

    return {
      ...product,
      rating: aggregations._avg.rating,
    };
  },
  ['get-product'],
  { tags: ['products'] },
);
