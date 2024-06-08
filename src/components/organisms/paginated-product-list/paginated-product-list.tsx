import type { Route } from 'next';
import { Pagination } from '@/components/molecules/pagination';
import { ProductList } from '@/components/organisms/product-list';
import type { Product } from '@/services/products';

interface PaginatedProductListProps<RouteInferType extends string> {
  page: number;
  pagesCount: number;
  pageToHref: (page: number) => Route<RouteInferType>;
  products: Product[];
}

export const PaginatedProductList = <RouteInferType extends string>({
  page,
  pagesCount,
  pageToHref,
  products,
}: PaginatedProductListProps<RouteInferType>) => (
  <div className="container pt-14">
    <ProductList products={products} />
    <Pagination
      className="mt-14"
      currentPage={page}
      pagesCount={pagesCount}
      pageToHref={pageToHref}
    />
  </div>
);
