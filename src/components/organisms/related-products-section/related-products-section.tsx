import { ProductList } from '@/components/organisms/product-list';
import { getRelatedProducts, type Product } from '@/services/products';

interface RelatedProductsSectionProps {
  className?: string;
  productSlug: Product['slug'];
}

export const RelatedProductsSection = async ({
  className,
  productSlug,
}: RelatedProductsSectionProps) => {
  const products = await getRelatedProducts(productSlug, 4);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className={className} data-testid="related-products">
      <h2 className="mb-5 text-xl font-bold">Similar products</h2>
      <ProductList products={products} />
    </section>
  );
};
