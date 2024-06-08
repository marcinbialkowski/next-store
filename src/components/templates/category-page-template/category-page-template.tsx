import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { PaginatedProductList } from '@/components/organisms/paginated-product-list';
import { type Category } from '@/services/categories';

interface CategoryPageTemplateProps {
  category: Category;
  page: number;
}

export const CategoryPageTemplate = ({
  category,
  page,
}: CategoryPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle>{category.name}</PageTitle>
    </MainBanner>
    <PaginatedProductList
      page={page}
      pagesCount={category.productsData.pagesCount}
      pageToHref={(page) => `/categories/${category.slug}/${page}`}
      products={category.productsData.products}
    />
  </>
);
