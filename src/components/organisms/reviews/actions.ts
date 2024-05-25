'use server';

import { createReview, type ReviewCreateData } from '@/services/reviews';

export const submitReviewAction = async (data: ReviewCreateData) => {
  await createReview(data);
};
