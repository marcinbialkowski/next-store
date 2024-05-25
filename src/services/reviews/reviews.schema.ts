import { z } from 'zod';
import { MAX_REVIEW } from './reviews.const';

export const reviewSchema = z.object({
  productId: z.string(),
  author: z.string().trim().min(2),
  email: z.string().trim().email(),
  title: z.string().trim().min(2),
  content: z.string().trim().min(2).max(250),
  rating: z.coerce.number().int().gte(1).lte(MAX_REVIEW),
});
