import { type Collection as CollectionModel } from '@prisma/client';
import { type Image } from '@/services/images';
import { type GetProductsResult } from '@/services/products';

export interface Collection extends CollectionModel {
  productsData: GetProductsResult;
}

export interface CollectionListItem extends CollectionModel {
  image: Image;
}
