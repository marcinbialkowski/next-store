import { unstable_cache as cache } from 'next/cache';
import {
  type ProductsListOptions,
  type GetProductsResult,
  type GetProductResult,
} from './products.types';
import {
  toProductsPaginatedResult,
  toProductsPaginationVariables,
} from './products.utils';
import {
  executeGraphql,
  ProductGetBySlugDocument,
  ProductsGetListDocument,
  type ProductFragment,
  type ProductListItemFragment,
} from '@/graphql/client';

export const getProducts = cache(
  async (options: ProductsListOptions): Promise<GetProductsResult> => {
    const result = await executeGraphql(ProductsGetListDocument, {
      ...toProductsPaginationVariables(options),
      ...(options.search ? { search: options.search } : {}),
      ...(options.sortBy
        ? { sortBy: options.sortBy, sortDirection: options.sortDirection }
        : {}),
    });

    return toProductsPaginatedResult(result.products, {
      pageSize: options.pageSize,
    });
  },
  ['get-products'],
  { tags: ['products'] },
);

// TODO: implement
export const getRelatedProducts = cache(
  async (
    _productSlug: ProductFragment['slug'],
  ): Promise<ProductListItemFragment[]> => Promise.resolve([]),
  ['related-products'],
  { tags: ['products'] },
);

export const getProduct = cache(
  (slug: ProductFragment['slug']): Promise<GetProductResult> =>
    executeGraphql(ProductGetBySlugDocument, { slug }).then(
      (result) => result.product ?? null,
    ),
  ['get-product'],
  { tags: ['products'] },
);
