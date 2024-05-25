import { unstable_cache as cache } from 'next/cache';
import { type Collection } from './collections.types';
import {
  type ProductsPaginationOptions,
  getProducts,
} from '@/services/products';
import { prisma } from '@/db';

export const getCollection = cache(
  async (
    slug: Collection['slug'],
    paginationOptions: ProductsPaginationOptions,
  ) => {
    const collection = await prisma.collection.findUnique({ where: { slug } });

    if (!collection) {
      return null;
    }

    const productsResult = await getProducts({
      collectionId: collection.id,
      ...paginationOptions,
    });

    return {
      ...collection,
      ...productsResult,
    };
  },
  ['get-collection'],
  { tags: ['collections', 'products'] },
);
