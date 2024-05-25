import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductPrice } from '@/components/atoms/product-price';
import { AddToCart } from '@/components/molecules/add-to-cart';
import { Rating } from '@/components/molecules/rating';
import { ProductReviewsSection } from '@/components/organisms/product-reviews-section';
import { RelatedProductsSection } from '@/components/organisms/related-products-section';
import { getProduct } from '@/services/products';

interface ProductPageProps {
  params: { productSlug: string };
}

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    return {};
  }

  const { description, name } = product;
  const title = `${name} - NextStore`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container grid grid-cols-1 gap-14 pt-14 lg:grid-cols-2 xl:gap-24">
      <div className="min-w-0">
        <ProductImage
          className="rounded-lg"
          image={product.primaryImage}
          priority
        />
      </div>
      <div>
        <h1 className="text-4xl">{product.name}</h1>
        <Rating className="mt-1" rating={product.rating} />
        <p className="mb-6 mt-4 text-base text-gray-600">
          {product.description}
        </p>
        <ProductPrice className="mb-6 text-2xl" price={product.price} />
        <AddToCart product={product} />
      </div>
      <Suspense>
        <RelatedProductsSection
          className="mt-10 lg:col-span-2"
          productSlug={params.productSlug}
        />
      </Suspense>
      <Suspense>
        <ProductReviewsSection
          className="mt-10 lg:col-span-2"
          productId={product.id}
        />
      </Suspense>
    </div>
  );
};

export default ProductPage;
