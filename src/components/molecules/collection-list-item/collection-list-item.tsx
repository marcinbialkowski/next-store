import { CollectionImage } from '@/components/atoms/collection-image';
import { Link } from '@/components/atoms/link';
import type { Collection } from '@/services/collections';
import type { Image } from '@/services/images';

export interface CollectionListItemProps {
  collection: Collection & {
    image: Image;
  };
}

export const CollectionListItem = ({ collection }: CollectionListItemProps) => (
  <li>
    <article className="flex w-full flex-col rounded-lg bg-white shadow">
      <Link href={`/collections/${collection.slug}`}>
        <CollectionImage className="rounded-t-lg" image={collection.image} />
        <h3 className="px-3 py-4 text-center font-bold hover:underline">
          {collection.name}
        </h3>
      </Link>
    </article>
  </li>
);
