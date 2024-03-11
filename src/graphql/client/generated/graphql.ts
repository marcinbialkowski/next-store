/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CategoryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CollectionProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ListMeta = {
  count: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Mutation = {
  orderAddItem: Order;
  orderChangeItemQuantity: Order;
  orderCreate: Order;
  orderRemoveItem: Order;
  reviewCreate: Review;
};

export type MutationOrderAddItemArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type MutationOrderChangeItemQuantityArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type MutationOrderRemoveItemArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Order = {
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  status: OrderStatus;
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type OrderStatus = 'AWAITING_PAYMENT' | 'CANCELLED' | 'CREATED' | 'PAID';

export type Product = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductsSortBy = 'PRICE' | 'RATING';

export type ProductsSortDirection = 'ASC' | 'DESC';

export type Query = {
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  reviews: Array<Review>;
};

export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};

export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};

export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<OrderStatus>;
};

export type QueryProductArgs = {
  slug: Scalars['String']['input'];
};

export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductsSortBy>;
  sortDirection?: InputMaybe<ProductsSortDirection>;
};

export type QueryReviewsArgs = {
  productId: Scalars['ID']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type CartFragment = {
  id: string;
  items: Array<{
    id: string;
    quantity: number;
    product: {
      id: string;
      slug: string;
      name: string;
      price: number;
      rating?: number | null;
      images: Array<{
        url: string;
        alt: string;
        width: number;
        height: number;
      }>;
    };
  }>;
};

export type CartItemFragment = {
  id: string;
  quantity: number;
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    rating?: number | null;
    images: Array<{ url: string; alt: string; width: number; height: number }>;
  };
};

export type ImageFragment = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductFragment = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  rating?: number | null;
  images: Array<{ url: string; alt: string; width: number; height: number }>;
};

export type ProductListFragment = {
  data: Array<{
    id: string;
    slug: string;
    name: string;
    price: number;
    rating?: number | null;
    images: Array<{ url: string; alt: string; width: number; height: number }>;
  }>;
  meta: { total: number };
};

export type ProductListItemFragment = {
  id: string;
  slug: string;
  name: string;
  price: number;
  rating?: number | null;
  images: Array<{ url: string; alt: string; width: number; height: number }>;
};

export type ReviewFragment = {
  id: string;
  author: string;
  title: string;
  content: string;
  rating: number;
};

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;

export type CartAddItemMutation = { orderAddItem: { id: string } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;

export type CartChangeItemQuantityMutation = {
  orderChangeItemQuantity: { id: string };
};

export type CartCreateMutationVariables = Exact<{ [key: string]: never }>;

export type CartCreateMutation = { orderCreate: { id: string } };

export type CartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;

export type CartRemoveItemMutation = { orderRemoveItem: { id: string } };

export type ReviewCreateMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  author: Scalars['String']['input'];
  email: Scalars['String']['input'];
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;

export type ReviewCreateMutation = { reviewCreate: { id: string } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type CartGetByIdQuery = {
  order?: {
    id: string;
    items: Array<{
      id: string;
      quantity: number;
      product: {
        id: string;
        slug: string;
        name: string;
        price: number;
        rating?: number | null;
        images: Array<{
          url: string;
          alt: string;
          width: number;
          height: number;
        }>;
      };
    }>;
  } | null;
};

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsFirst?: InputMaybe<Scalars['Int']['input']>;
  productsSkip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CategoryGetBySlugQuery = {
  category?: {
    name: string;
    products: {
      data: Array<{
        id: string;
        slug: string;
        name: string;
        price: number;
        rating?: number | null;
        images: Array<{
          url: string;
          alt: string;
          width: number;
          height: number;
        }>;
      }>;
      meta: { total: number };
    };
  } | null;
};

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsFirst?: InputMaybe<Scalars['Int']['input']>;
  productsSkip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CollectionGetBySlugQuery = {
  collection?: {
    name: string;
    description: string;
    products: {
      data: Array<{
        id: string;
        slug: string;
        name: string;
        price: number;
        rating?: number | null;
        images: Array<{
          url: string;
          alt: string;
          width: number;
          height: number;
        }>;
      }>;
      meta: { total: number };
    };
  } | null;
};

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type ProductGetBySlugQuery = {
  product?: {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    rating?: number | null;
    images: Array<{ url: string; alt: string; width: number; height: number }>;
  } | null;
};

export type ProductsGetByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ProductsGetByIdsQuery = {
  products: {
    data: Array<{
      id: string;
      slug: string;
      name: string;
      price: number;
      rating?: number | null;
      images: Array<{
        url: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
    meta: { total: number };
  };
};

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ProductsSortBy>;
  sortDirection?: InputMaybe<ProductsSortDirection>;
}>;

export type ProductsGetListQuery = {
  products: {
    data: Array<{
      id: string;
      slug: string;
      name: string;
      price: number;
      rating?: number | null;
      images: Array<{
        url: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
    meta: { total: number };
  };
};

export type ReviewsGetByProductIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;

export type ReviewsGetByProductIdQuery = {
  reviews: Array<{
    id: string;
    author: string;
    title: string;
    content: string;
    rating: number;
  }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ImageFragmentDoc = new TypedDocumentString(
  `
    fragment Image on Image {
  url
  alt
  width
  height
}
    `,
  { fragmentName: 'Image' },
) as unknown as TypedDocumentString<ImageFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(
  `
    fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}`,
  { fragmentName: 'ProductListItem' },
) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartItemFragmentDoc = new TypedDocumentString(
  `
    fragment CartItem on OrderItem {
  id
  quantity
  product {
    ...ProductListItem
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`,
  { fragmentName: 'CartItem' },
) as unknown as TypedDocumentString<CartItemFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(
  `
    fragment Cart on Order {
  id
  items {
    ...CartItem
  }
}
    fragment CartItem on OrderItem {
  id
  quantity
  product {
    ...ProductListItem
  }
}
fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`,
  { fragmentName: 'Cart' },
) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(
  `
    fragment Product on Product {
  id
  slug
  name
  description
  price
  rating
  images {
    ...Image
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}`,
  { fragmentName: 'Product' },
) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ProductListFragmentDoc = new TypedDocumentString(
  `
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`,
  { fragmentName: 'ProductList' },
) as unknown as TypedDocumentString<ProductListFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(
  `
    fragment Review on Review {
  id
  author
  title
  content
  rating
}
    `,
  { fragmentName: 'Review' },
) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($cartId: ID!, $productId: ID!) {
  orderAddItem(orderId: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  CartAddItemMutation,
  CartAddItemMutationVariables
>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  orderChangeItemQuantity(
    orderId: $cartId
    productId: $productId
    quantity: $quantity
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  CartChangeItemQuantityMutation,
  CartChangeItemQuantityMutationVariables
>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  orderCreate {
    id
  }
}
    `) as unknown as TypedDocumentString<
  CartCreateMutation,
  CartCreateMutationVariables
>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($cartId: ID!, $productId: ID!) {
  orderRemoveItem(orderId: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  CartRemoveItemMutation,
  CartRemoveItemMutationVariables
>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($productId: ID!, $author: String!, $email: String!, $title: String!, $content: String!, $rating: Int!) {
  reviewCreate(
    productId: $productId
    author: $author
    email: $email
    title: $title
    content: $content
    rating: $rating
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  ReviewCreateMutation,
  ReviewCreateMutationVariables
>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  order(id: $id, status: CREATED) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  items {
    ...CartItem
  }
}
fragment CartItem on OrderItem {
  id
  quantity
  product {
    ...ProductListItem
  }
}
fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  CartGetByIdQuery,
  CartGetByIdQueryVariables
>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {
  category(slug: $slug) {
    name
    products(first: $productsFirst, skip: $productsSkip) {
      ...ProductList
    }
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  CategoryGetBySlugQuery,
  CategoryGetBySlugQueryVariables
>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!, $productsFirst: Int, $productsSkip: Int) {
  collection(slug: $slug) {
    name
    description
    products(first: $productsFirst, skip: $productsSkip) {
      ...ProductList
    }
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  CollectionGetBySlugQuery,
  CollectionGetBySlugQueryVariables
>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  product(slug: $slug) {
    ...Product
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment Product on Product {
  id
  slug
  name
  description
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  ProductGetBySlugQuery,
  ProductGetBySlugQueryVariables
>;
export const ProductsGetByIdsDocument = new TypedDocumentString(`
    query ProductsGetByIds($ids: [ID!]!) {
  products(ids: $ids) {
    ...ProductList
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  ProductsGetByIdsQuery,
  ProductsGetByIdsQueryVariables
>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $skip: Int, $search: String, $sortBy: ProductsSortBy, $sortDirection: ProductsSortDirection) {
  products(
    first: $first
    skip: $skip
    search: $search
    sortBy: $sortBy
    sortDirection: $sortDirection
  ) {
    ...ProductList
  }
}
    fragment Image on Image {
  url
  alt
  width
  height
}
fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  images {
    ...Image
  }
}`) as unknown as TypedDocumentString<
  ProductsGetListQuery,
  ProductsGetListQueryVariables
>;
export const ReviewsGetByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetByProductId($productId: ID!) {
  reviews(productId: $productId) {
    ...Review
  }
}
    fragment Review on Review {
  id
  author
  title
  content
  rating
}`) as unknown as TypedDocumentString<
  ReviewsGetByProductIdQuery,
  ReviewsGetByProductIdQueryVariables
>;
