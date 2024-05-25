import type { Product as ProductModel } from '@prisma/client';
import type { Image } from '@/services/images';

export interface Product
  extends Pick<ProductModel, 'id' | 'slug' | 'name' | 'description' | 'price'> {
  primaryImage: Image;
  rating: number | null;
}

export type ProductsSortBy = 'PRICE' | 'RATING';

export type ProductsSortDirection = 'ASC' | 'DESC';

export interface ProductsPaginationOptions {
  page?: number;
  pageSize: number;
}

export interface ProductsListOptions extends ProductsPaginationOptions {
  ids?: Product['id'][];
  search?: string;
  sortBy?: ProductsSortBy;
  sortDirection?: ProductsSortDirection;
  categoryId?: string;
  collectionId?: string;
}

export interface GetProductsResult {
  products: Product[];
  pagesCount: number;
}
