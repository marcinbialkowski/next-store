import { notFound } from 'next/navigation';
import qs from 'qs';
import { ProductsPageTemplate } from '@/components/templates/products-page-template';
import { getProducts } from '@/services/products';
import {
  parsePageParam,
  parseSearchParams,
} from '@/utils/parse-products-params';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface ProductsPageProps {
  params: { page: string };
  searchParams?: {
    sortBy?: string;
    sortDirection?: string;
  };
}

const pageSize = DEFAULT_PAGE_SIZE;

export const generateStaticParams = async () => {
  const { pagesCount } = await getProducts({ pageSize });
  return Array.from({ length: Math.min(pagesCount, 5) }, (_v, index) => ({
    page: `${index + 1}`,
  }));
};

const ProductsPage = async ({ params, searchParams }: ProductsPageProps) => {
  const page = parsePageParam(params.page);
  const { sortBy, sortDirection } = parseSearchParams(searchParams ?? {});

  const { products, pagesCount } = await getProducts({
    page,
    pageSize,
    sortBy,
    sortDirection,
  });

  if (products.length === 0 && page > 1) {
    return notFound();
  }

  return (
    <ProductsPageTemplate
      page={page}
      pagesCount={pagesCount}
      products={products}
      queryString={qs.stringify(searchParams, { addQueryPrefix: true })}
      sortBy={sortBy}
      sortDirection={sortDirection}
    />
  );
};

export default ProductsPage;
