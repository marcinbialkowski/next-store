import { CollectionListItem } from '@/components/molecules/collection-list-item';
import { getCollections } from '@/services/collections';

export const CollectionList = async () => {
  const collections = await getCollections();

  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      {collections.map((collection) => (
        <CollectionListItem key={collection.id} collection={collection} />
      ))}
    </ul>
  );
};
