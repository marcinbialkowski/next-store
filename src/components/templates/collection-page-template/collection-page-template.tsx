import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { ProductList } from '@/components/organisms/product-list';
import { type Collection } from '@/services/collections';

interface CollectionPageTemplateProps {
  collection: Collection;
}

export const CollectionPageTemplate = ({
  collection,
}: CollectionPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle className="mb-4">{collection.name}</PageTitle>
      <p className="text-base text-gray-700">{collection.description}</p>
    </MainBanner>
    <div className="container pt-14">
      <ProductList products={collection.productsData.products} />
    </div>
  </>
);
