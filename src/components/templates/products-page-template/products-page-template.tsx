import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { ProductsSort } from '@/components/molecules/products-sort';
import { PaginatedProductList } from '@/components/organisms/paginated-product-list';
import {
  type Product,
  type ProductsSortBy,
  type ProductsSortDirection,
} from '@/services/products';

interface ProductsPageTemplateProps {
  page: number;
  pagesCount: number;
  products: Product[];
  queryString: string;
  sortBy: ProductsSortBy;
  sortDirection: ProductsSortDirection;
}

export const ProductsPageTemplate = ({
  page,
  pagesCount,
  products,
  queryString,
  sortBy,
  sortDirection,
}: ProductsPageTemplateProps) => (
  <>
    <MainBanner className="flex items-center justify-between">
      <PageTitle>All products</PageTitle>
      <ProductsSort value={`${sortBy}-${sortDirection}`} />
    </MainBanner>
    <PaginatedProductList
      page={page}
      pagesCount={pagesCount}
      pageToHref={(page) => `/products/${page}${queryString}`}
      products={products}
    />
  </>
);
