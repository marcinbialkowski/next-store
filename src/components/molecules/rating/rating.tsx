import clsx from 'clsx';
import { formatRating } from './format-rating';
import { StarRating } from '@/components/atoms/star-rating';
import { MAX_REVIEW } from '@/services/reviews';

interface RatingProps {
  className?: string;
  rating?: number | null;
  starSize?: number;
}

export const Rating = ({ className, rating, starSize }: RatingProps) => {
  if (!rating) {
    return null;
  }

  return (
    <div className={clsx(className, 'flex items-center gap-2')}>
      <p className="italic text-gray-600">
        <span data-testid="product-rating">{formatRating(rating)}</span> /{' '}
        {MAX_REVIEW}
      </p>
      <StarRating rating={Math.round(rating)} starSize={starSize} />
    </div>
  );
};
