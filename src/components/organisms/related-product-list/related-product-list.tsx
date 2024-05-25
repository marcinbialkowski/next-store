import { ProductList } from '@/components/organisms/product-list';
import { getRelatedProducts, type Product } from '@/services/products';

interface RelatedProductListProps {
  productSlug: Product['slug'];
}

export const RelatedProductList = async ({
  productSlug,
}: RelatedProductListProps) => {
  const products = await getRelatedProducts(productSlug);

  return <ProductList products={products} />;
};
