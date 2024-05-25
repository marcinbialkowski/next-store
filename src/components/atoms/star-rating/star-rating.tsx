import { MAX_REVIEW } from '@/services/reviews';
import { Star } from '@/components/atoms/star';

interface StarRatingProps {
  rating: number;
  starSize?: number;
}

const stars = Array.from({ length: MAX_REVIEW }).map((_v, index) => index + 1);

export const StarRating = ({ rating, starSize }: StarRatingProps) => (
  <div aria-hidden className="flex">
    {stars.map((star) => (
      <Star isFilled={rating >= star} key={star} size={starSize} />
    ))}
  </div>
);
