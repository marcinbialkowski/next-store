import { type z } from 'zod';
import { type Review as ReviewModel } from '@prisma/client';
import { type reviewSchema } from './reviews.schema';

export type Review = Pick<
  ReviewModel,
  'id' | 'author' | 'title' | 'content' | 'rating'
>;

export type ReviewCreateData = z.infer<typeof reviewSchema>;
