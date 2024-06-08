import { notFound } from 'next/navigation';
import { SearchPageTemplate } from '@/components/templates/search-page-template';
import { getProducts } from '@/services/products';
import { parsePageParam } from '@/utils/parse-products-params';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface SearchPageProps {
  params: { page: string };
  searchParams?: {
    query?: string;
  };
}

const pageSize = DEFAULT_PAGE_SIZE;

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
    <SearchPageTemplate
      query={query}
      page={page}
      pagesCount={pagesCount}
      products={products}
    />
  );
};

export default SearchPage;
