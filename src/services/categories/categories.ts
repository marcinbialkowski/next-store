import { unstable_cache as cache } from 'next/cache';
import { type Category } from './categories.types';
import {
  type ProductsPaginationOptions,
  getProducts,
} from '@/services/products';
import { prisma } from '@/db';

export const getCategory = cache(
  async (
    slug: Category['slug'],
    paginationOptions: ProductsPaginationOptions,
  ) => {
    const category = await prisma.category.findUnique({ where: { slug } });

    if (!category) {
      return null;
    }

    const productsResult = await getProducts({
      categoryId: category.id,
      ...paginationOptions,
    });

    return {
      ...category,
      ...productsResult,
    };
  },
  ['get-category'],
  { tags: ['categories', 'products'] },
);
