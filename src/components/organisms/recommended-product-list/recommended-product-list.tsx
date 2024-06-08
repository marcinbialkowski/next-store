import { getProducts } from '@/services/products';
import { ProductList } from '@/components/organisms/product-list';
import { DEFAULT_PAGE_SIZE } from '@/const';

export const RecommendedProductList = async () => {
  const { products } = await getProducts({
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: 'RATING',
    sortDirection: 'DESC',
  });

  return <ProductList products={products} />;
};
