import { Suspense } from 'react';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductPrice } from '@/components/atoms/product-price';
import { Rating } from '@/components/molecules/rating';
import { AddToCart } from '@/components/molecules/add-to-cart';
import { RelatedProductsSection } from '@/components/organisms/related-products-section';
import { ProductReviewsSection } from '@/components/organisms/product-reviews-section';
import type { Product } from '@/services/products';

interface ProductPageTemplateProps {
  product: Product;
}

export const ProductPageTemplate = ({ product }: ProductPageTemplateProps) => (
  <div className="container grid grid-cols-1 gap-x-14 gap-y-24 pt-14 lg:grid-cols-2 xl:gap-x-24">
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
      <p className="mb-6 mt-4 text-base text-gray-600">{product.description}</p>
      <ProductPrice className="mb-6 text-2xl" price={product.price} />
      <AddToCart product={product} />
    </div>
    <Suspense>
      <RelatedProductsSection
        className="lg:col-span-2"
        productSlug={product.slug}
      />
    </Suspense>
    <Suspense>
      <ProductReviewsSection className="lg:col-span-2" productId={product.id} />
    </Suspense>
  </div>
);
