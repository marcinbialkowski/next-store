import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { Pagination } from '@/components/molecules/pagination';
import { ProductList } from '@/components/organisms/product-list';
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
    <div className="container pt-14">
      <ProductList products={category.productsData.products} />
      <Pagination
        className="mt-14"
        currentPage={page}
        pagesCount={category.productsData.pagesCount}
        pageToHref={(page) => `/categories/${category.slug}/${page}`}
      />
    </div>
  </>
);
