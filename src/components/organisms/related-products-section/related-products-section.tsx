import { ProductList } from '@/components/organisms/product-list';
import { getRelatedProducts, type Product } from '@/services/products';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface RelatedProductsSectionProps {
  className?: string;
  productSlug: Product['slug'];
}

export const RelatedProductsSection = async ({
  className,
  productSlug,
}: RelatedProductsSectionProps) => {
  const products = await getRelatedProducts(productSlug, DEFAULT_PAGE_SIZE);

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
