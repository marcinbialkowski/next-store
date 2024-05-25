'use client';

import { useFormStatus } from 'react-dom';
import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';
import { Textarea } from '@/components/atoms/textarea';
import { StarRatingInput } from '@/components/molecules/star-rating-input';

interface ReviewFormProps {
  productId: string;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
  const status = useFormStatus();

  return (
    <div className="max-w-screen-sm">
      <h3 className="mb-3 text-lg">Share your thoughts:</h3>
      <div className="flex flex-col gap-4">
        <input name="productId" type="hidden" value={productId} />
        <label>
          <span className="text-gray-600">Review title</span>
          <Input className="w-full" minLength={2} name="title" required />
        </label>
        <label>
          <span className="text-gray-600">Review content</span>
          <Textarea
            className="w-full"
            minLength={2}
            name="content"
            required
            rows={3}
          />
        </label>
        <label>
          <span className="text-gray-600">Name</span>
          <Input className="w-full" minLength={2} name="author" required />
        </label>
        <label>
          <span className="text-gray-600">Email</span>
          <Input className="w-full" name="email" required type="email" />
        </label>
        <StarRatingInput label="Rating" name="rating" />
        <Button className="mt-3" disabled={status.pending} type="submit">
          Submit review
        </Button>
      </div>
    </div>
  );
};
