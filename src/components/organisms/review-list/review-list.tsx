import { EmptyResultMessage } from '@/components/atoms/empty-result-message';
import { ReviewListItem } from '@/components/molecules/review-list-item';
import { type Review } from '@/services/reviews';

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <EmptyResultMessage className="pt-0">No reviews yet</EmptyResultMessage>
    );
  }

  return (
    <ul className="divide-y divide-gray-300">
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
