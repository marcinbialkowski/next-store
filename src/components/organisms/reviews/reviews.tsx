'use client';

import { useOptimistic, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { submitReviewAction } from './actions';
import { ReviewForm } from '@/components/molecules/review-form';
import { ReviewList } from '@/components/organisms/review-list';
import { type Review, reviewSchema } from '@/services/reviews';

interface ReviewsProps {
  productId: string;
  reviews: Review[];
}

export const Reviews = ({ productId, reviews }: ReviewsProps) => {
  const [formKey, setFormKey] = useState(() => uuid4());
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state, newReview: Review) => [newReview, ...state],
  );

  const createReview = async (formData: FormData) => {
    const reviewData = reviewSchema.parse(Object.fromEntries(formData));
    addOptimisticReview({ id: uuid4(), ...reviewData });
    setFormKey(uuid4());
    await submitReviewAction(reviewData);
  };

  return (
    <div className="grid grid-cols-1 gap-16 2xl:grid-cols-[3fr_5fr]">
      <form action={createReview} data-testid="add-review-form" key={formKey}>
        <ReviewForm productId={productId} />
      </form>
      <ReviewList reviews={optimisticReviews} />
    </div>
  );
};
