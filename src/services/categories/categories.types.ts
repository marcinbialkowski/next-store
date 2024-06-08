import { type Category as CategoryModel } from '@prisma/client';
import { type GetProductsResult } from '@/services/products';

export interface Category extends CategoryModel {
  productsData: GetProductsResult;
}
