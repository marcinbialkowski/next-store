import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CollectionPageTemplate } from '@/components/templates/collection-page-template';
import { getCollection } from '@/services/collections';
import { DEFAULT_PAGE_SIZE } from '@/const';

interface CollectionPageProps {
  params: {
    collectionSlug: string;
  };
}

const pageSize = DEFAULT_PAGE_SIZE;

export const generateMetadata = async ({
  params,
}: CollectionPageProps): Promise<Metadata> => {
  const { collectionSlug: slug } = params;

  const collection = await getCollection(slug, {
    pageSize,
  });

  return collection
    ? {
        title: `${collection.name} - NextStore`,
      }
    : {};
};

// TODO: add pagination and make consistent with category page
const CollectionPage = async ({ params }: CollectionPageProps) => {
  const { collectionSlug: slug } = params;

  const collection = await getCollection(slug, {
    pageSize,
  });

  if (!collection) {
    return notFound();
  }

  return <CollectionPageTemplate collection={collection} />;
};

export default CollectionPage;
