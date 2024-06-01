import { PageTitle } from '@/components/atoms/page-title';
import { MainBanner } from '@/components/atoms/main-banner';
import { CollectionList } from '@/components/organisms/collection-list';
import { RecommendedProductList } from '@/components/organisms/recommended-product-list';

const HomePage = () => (
  <>
    <PageTitle className="sr-only">Home</PageTitle>
    <MainBanner tag="section">
      <h2 className="sr-only">Collections</h2>
      <CollectionList />
    </MainBanner>
    <section className="container pt-14">
      <h2 className="sr-only">Recommended products</h2>
      <RecommendedProductList />
    </section>
  </>
);

export default HomePage;
