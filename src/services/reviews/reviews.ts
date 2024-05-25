import { revalidateTag, unstable_cache as cache } from 'next/cache';
import { type Review, type ReviewCreateData } from './reviews.types';
import { prisma } from '@/db';

export const createReview = async (data: ReviewCreateData) => {
  await prisma.review.create({ data });

  revalidateTag('reviews');
  revalidateTag('products');
};

export const getReviews = cache(
  (productId: string): Promise<Review[]> =>
    prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
    }),
  ['get-reviews'],
  {
    tags: ['reviews'],
  },
);
