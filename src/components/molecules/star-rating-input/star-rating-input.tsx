'use client';

import { type ChangeEventHandler, useId, useState } from 'react';
import { MAX_REVIEW } from '@/services/reviews';
import { Star } from '@/components/atoms/star';

interface StarRatingInputProps {
  className?: string;
  defaultValue?: number;
  label: string;
  name: string;
}

const stars = Array.from({ length: MAX_REVIEW }).map((_v, index) => index + 1);

export const StarRatingInput = ({
  className,
  defaultValue,
  label,
  name,
}: StarRatingInputProps) => {
  const [value, setValue] = useState(defaultValue ?? 0);
  const id = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <fieldset className={className}>
      <legend className="mb-0.5 text-gray-600">{label}</legend>
      <div className="flex gap-2">
        {stars.map((star) => (
          <span
            className="rounded has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-green-700"
            key={star}
          >
            <input
              value={star}
              id={`${id}-${star}`}
              type="radio"
              name={name}
              className="sr-only"
              onChange={handleChange}
              defaultChecked={defaultValue === star}
              required
            />
            <label className="cursor-pointer" htmlFor={`${id}-${star}`}>
              <span className="sr-only">
                {star} {star === 1 ? 'star' : 'stars'}
              </span>
              <Star isFilled={value >= star} size={40} strokeWidth={1} />
            </label>
          </span>
        ))}
      </div>
    </fieldset>
  );
};
