import { Rating } from '@/components/molecules/rating';
import { type Review } from '@/services/reviews';

interface ReviewListItemProps {
  review: Review;
}

export const ReviewListItem = ({ review }: ReviewListItemProps) => (
  <li className="py-12 first-of-type:pt-0 last-of-type:pb-0">
    <p className="font-bold text-gray-600">{review.author}</p>
    <Rating className="mb-3" rating={review.rating} />
    <h3 className="mb-1 font-bold">{review.title}</h3>
    <p className="italic text-gray-600">{review.content}</p>
  </li>
);
