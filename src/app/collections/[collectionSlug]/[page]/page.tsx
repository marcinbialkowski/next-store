import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CollectionPageTemplate } from '@/components/templates/collection-page-template';
import { parsePageParam } from '@/utils/parse-products-params';
import { getCollection } from '@/services/collections';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface CollectionPageProps {
  params: {
    collectionSlug: string;
    page: string;
  };
}

const pageSize = DEFAULT_PAGE_SIZE;

export const generateMetadata = async ({
  params,
}: CollectionPageProps): Promise<Metadata> => {
  const { collectionSlug: slug } = params;
  const page = parsePageParam(params.page);

  const collection = await getCollection(slug, {
    page,
    pageSize,
  });

  return collection
    ? {
        title: `${collection.name} - NextStore`,
      }
    : {};
};

const CollectionPage = async ({ params }: CollectionPageProps) => {
  const { collectionSlug: slug } = params;
  const page = parsePageParam(params.page);

  const collection = await getCollection(slug, {
    page,
    pageSize,
  });

  if (
    !collection ||
    (collection.productsData.products.length === 0 && page > 1)
  ) {
    return notFound();
  }

  return <CollectionPageTemplate collection={collection} page={page} />;
};

export default CollectionPage;
