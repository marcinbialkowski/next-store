import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/atoms/page-title';
import { MainBanner } from '@/components/atoms/main-banner';
import { ProductList } from '@/components/organisms/product-list';
import { Pagination } from '@/components/molecules/pagination';
import { getProducts } from '@/services/products';
import { parsePageParam } from '@/utils/parse-products-params';

interface SearchPageProps {
  params: { page: string };
  searchParams?: {
    query?: string;
  };
}

const pageSize = 4;

const SearchPage = async ({ params, searchParams }: SearchPageProps) => {
  const query = searchParams?.query;
  const page = parsePageParam(params.page);

  if (!query) {
    return notFound();
  }

  const { products, pagesCount } = await getProducts({
    page,
    pageSize,
    search: query,
  });

  if (products.length === 0 && page > 1) {
    return notFound();
  }

  return (
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
};

export default SearchPage;
