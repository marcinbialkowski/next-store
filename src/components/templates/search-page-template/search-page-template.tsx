import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { ProductList } from '@/components/organisms/product-list';
import { Pagination } from '@/components/molecules/pagination';
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
    <div className="container pt-14">
      <ProductList products={products} />
      <Pagination
        className="mt-14"
        currentPage={page}
        pagesCount={pagesCount}
        pageToHref={(page) =>
          page === 1
            ? `/search?query=${query}`
            : `/search/${page}?query=${query}`
        }
      />
    </div>
  </>
);
