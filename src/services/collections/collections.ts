import { unstable_cache as cache } from 'next/cache';
import { type Collection, type CollectionListItem } from './collections.types';
import {
  type ProductsPaginationOptions,
  getProducts,
} from '@/services/products';
import { prisma } from '@/db';

export const getCollections = cache(
  async (): Promise<CollectionListItem[]> =>
    prisma.collection.findMany({ include: { image: true } }),
  ['get-collections'],
  {
    tags: ['collections'],
  },
);

export const getCollection = cache(
  async (
    slug: Collection['slug'],
    paginationOptions: ProductsPaginationOptions,
  ): Promise<Collection | null> => {
    const collection = await prisma.collection.findUnique({ where: { slug } });

    if (!collection) {
      return null;
    }

    const productsData = await getProducts({
      collectionId: collection.id,
      ...paginationOptions,
    });

    return {
      ...collection,
      productsData,
    };
  },
  ['get-collection'],
  { tags: ['collections', 'products'] },
);
