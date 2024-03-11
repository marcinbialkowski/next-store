import { GraphQLResolveInfo } from 'graphql';
import { ApolloContext } from './types.js';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
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
  __typename?: 'Category';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CategoryproductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  slug: Scalars['String']['output'];
};

export type CollectionproductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ListMeta = {
  __typename?: 'ListMeta';
  count: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  orderAddItem: Order;
  orderChangeItemQuantity: Order;
  orderCreate: Order;
  orderRemoveItem: Order;
  reviewCreate: Review;
};

export type MutationorderAddItemArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type MutationorderChangeItemQuantityArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type MutationorderRemoveItemArgs = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type MutationreviewCreateArgs = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  status: OrderStatus;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type OrderStatus = 'AWAITING_PAYMENT' | 'CANCELLED' | 'CREATED' | 'PAID';

export type Product = {
  __typename?: 'Product';
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
  __typename?: 'ProductList';
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductsSortBy = 'PRICE' | 'RATING';

export type ProductsSortDirection = 'ASC' | 'DESC';

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  reviews: Array<Review>;
};

export type QuerycategoryArgs = {
  slug: Scalars['String']['input'];
};

export type QuerycollectionArgs = {
  slug: Scalars['String']['input'];
};

export type QueryorderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<OrderStatus>;
};

export type QueryproductArgs = {
  slug: Scalars['String']['input'];
};

export type QueryproductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductsSortBy>;
  sortDirection?: InputMaybe<ProductsSortDirection>;
};

export type QueryreviewsArgs = {
  productId: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Collection: ResolverTypeWrapper<Collection>;
  Image: ResolverTypeWrapper<Image>;
  ListMeta: ResolverTypeWrapper<ListMeta>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderStatus: OrderStatus;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ProductList: ResolverTypeWrapper<ProductList>;
  ProductsSortBy: ProductsSortBy;
  ProductsSortDirection: ProductsSortDirection;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  String: Scalars['String']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Collection: Collection;
  Image: Image;
  ListMeta: ListMeta;
  Mutation: {};
  Order: Order;
  OrderItem: OrderItem;
  Product: Product;
  Float: Scalars['Float']['output'];
  ProductList: ProductList;
  Query: {};
  Review: Review;
  Boolean: Scalars['Boolean']['output'];
};

export type CategoryResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<
    ResolversTypes['ProductList'],
    ParentType,
    ContextType,
    Partial<CategoryproductsArgs>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Collection'] = ResolversParentTypes['Collection'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<
    ResolversTypes['ProductList'],
    ParentType,
    ContextType,
    Partial<CollectionproductsArgs>
  >;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Image'] = ResolversParentTypes['Image'],
> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListMetaResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['ListMeta'] = ResolversParentTypes['ListMeta'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  orderAddItem?: Resolver<
    ResolversTypes['Order'],
    ParentType,
    ContextType,
    RequireFields<MutationorderAddItemArgs, 'orderId' | 'productId'>
  >;
  orderChangeItemQuantity?: Resolver<
    ResolversTypes['Order'],
    ParentType,
    ContextType,
    RequireFields<
      MutationorderChangeItemQuantityArgs,
      'orderId' | 'productId' | 'quantity'
    >
  >;
  orderCreate?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderRemoveItem?: Resolver<
    ResolversTypes['Order'],
    ParentType,
    ContextType,
    RequireFields<MutationorderRemoveItemArgs, 'orderId' | 'productId'>
  >;
  reviewCreate?: Resolver<
    ResolversTypes['Review'],
    ParentType,
    ContextType,
    RequireFields<
      MutationreviewCreateArgs,
      'author' | 'content' | 'email' | 'productId' | 'rating' | 'title'
    >
  >;
};

export type OrderResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Order'] = ResolversParentTypes['Order'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList'],
> = {
  data?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ListMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QuerycategoryArgs, 'slug'>
  >;
  collection?: Resolver<
    Maybe<ResolversTypes['Collection']>,
    ParentType,
    ContextType,
    RequireFields<QuerycollectionArgs, 'slug'>
  >;
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryorderArgs, 'id'>
  >;
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, 'slug'>
  >;
  products?: Resolver<
    ResolversTypes['ProductList'],
    ParentType,
    ContextType,
    Partial<QueryproductsArgs>
  >;
  reviews?: Resolver<
    Array<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<QueryreviewsArgs, 'productId'>
  >;
};

export type ReviewResolvers<
  ContextType = ApolloContext,
  ParentType extends
    ResolversParentTypes['Review'] = ResolversParentTypes['Review'],
> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApolloContext> = {
  Category?: CategoryResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ListMeta?: ListMetaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
};
