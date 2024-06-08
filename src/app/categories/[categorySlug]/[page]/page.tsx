import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '@/components/templates/category-page-template';
import { parsePageParam } from '@/utils/parse-products-params';
import { getCategory } from '@/services/categories';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    page: string;
  };
}

const pageSize = DEFAULT_PAGE_SIZE;

export const generateMetadata = async ({
  params,
}: CategoryPageProps): Promise<Metadata> => {
  const { categorySlug: slug } = params;
  const page = parsePageParam(params.page);

  const category = await getCategory(slug, {
    page,
    pageSize,
  });

  return category
    ? {
        title: `${category.name} - NextStore`,
      }
    : {};
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categorySlug: slug } = params;
  const page = parsePageParam(params.page);

  const category = await getCategory(slug, {
    page,
    pageSize,
  });

  if (!category || (category.productsData.products.length === 0 && page > 1)) {
    return notFound();
  }

  return <CategoryPageTemplate category={category} page={page} />;
};

export default CategoryPage;
