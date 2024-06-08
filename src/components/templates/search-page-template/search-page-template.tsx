import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { PaginatedProductList } from '@/components/organisms/paginated-product-list';
import { type Product } from '@/services/products';

interface SearchPageTemplateProps {
  query: string;
  page: number;
  pagesCount: number;
  products: Product[];
}

export const SearchPageTemplate = ({
  query,
  page,
  pagesCount,
  products,
}: SearchPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle>Search result for phrase: &quot;{query}&quot;</PageTitle>
    </MainBanner>
    <PaginatedProductList
      page={page}
      pagesCount={pagesCount}
      pageToHref={(page) =>
        page === 1 ? `/search?query=${query}` : `/search/${page}?query=${query}`
      }
      products={products}
    />
  </>
);
