import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { PaginatedProductList } from '@/components/organisms/paginated-product-list';
import { type Collection } from '@/services/collections';

interface CollectionPageTemplateProps {
  collection: Collection;
  page: number;
}

export const CollectionPageTemplate = ({
  collection,
  page,
}: CollectionPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle className="mb-4">{collection.name}</PageTitle>
      <p className="text-base text-gray-700">{collection.description}</p>
    </MainBanner>
    <PaginatedProductList
      page={page}
      pagesCount={collection.productsData.pagesCount}
      pageToHref={(page) => `/collections/${collection.slug}/${page}`}
      products={collection.productsData.products}
    />
  </>
);
