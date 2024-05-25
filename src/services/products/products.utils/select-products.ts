import { z } from 'zod';
import { Prisma } from '@prisma/client';
import {
  type ProductsListOptions,
  type ProductsPaginationOptions,
  type ProductsSortBy,
  type ProductsSortDirection,
} from '../products.types';
import { type PrismaBaseClient } from '@/db';

const rawProductSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number().int(),
    rating: z.coerce.number().nullable(),
    primaryImageId: z.string(),
    primaryImageUrl: z.string(),
    primaryImageAlt: z.string(),
    primaryImageWidth: z.number().int(),
    primaryImageHeight: z.number().int(),
  })
  .transform(
    ({
      primaryImageId,
      primaryImageUrl,
      primaryImageAlt,
      primaryImageWidth,
      primaryImageHeight,
      ...product
    }) => ({
      ...product,
      primaryImage: {
        id: primaryImageId,
        url: primaryImageUrl,
        alt: primaryImageAlt,
        width: primaryImageWidth,
        height: primaryImageHeight,
      },
    }),
  );

const sortByToSql: Record<ProductsSortBy, ReturnType<typeof Prisma.sql>> = {
  PRICE: Prisma.sql`price`,
  RATING: Prisma.sql`rating`,
};

const sortDirectionToSql: Record<
  ProductsSortDirection,
  ReturnType<typeof Prisma.sql>
> = {
  ASC: Prisma.sql`ASC`,
  DESC: Prisma.sql`DESC`,
};

const buildWhere = ({
  ids,
  search,
  categoryId,
  collectionId,
}: Pick<
  ProductsListOptions,
  'ids' | 'search' | 'categoryId' | 'collectionId'
>) => {
  const whereConditions: Prisma.Sql[] = [];

  if (ids && ids.length > 0) {
    whereConditions.push(Prisma.sql`product.id IN (${Prisma.join(ids, ', ')})`);
  }

  if (search) {
    whereConditions.push(Prisma.sql`product.name ILIKE ${`%${search}%`}`);
  }

  if (categoryId) {
    whereConditions.push(Prisma.sql`EXISTS (
      SELECT 1
      FROM "_CategoryToProduct" cp
      WHERE cp."B" = product.id AND cp."A" = ${categoryId}
    )`);
  }

  if (collectionId) {
    whereConditions.push(Prisma.sql`EXISTS (
      SELECT 1
      FROM "_CollectionToProduct" cp
      WHERE cp."B" = product.id AND cp."A" = ${collectionId}
    )`);
  }

  return whereConditions.length
    ? Prisma.sql`WHERE ${Prisma.join(whereConditions, ' AND ')}`
    : Prisma.empty;
};

const buildOffset = ({ page = 1, pageSize }: ProductsPaginationOptions) =>
  (page - 1) * pageSize;

export const selectProducts =
  (prisma: PrismaBaseClient) =>
  async ({
    ids,
    categoryId,
    collectionId,
    page,
    pageSize,
    search,
    sortBy = 'RATING',
    sortDirection = 'DESC',
  }: ProductsListOptions) => {
    const result = await prisma.$queryRaw`SELECT
      product.id,
      product.slug,
      product.name,
      product.description,
      product.price,
      image.id AS "primaryImageId",
      image.url AS "primaryImageUrl",
      image.alt AS "primaryImageAlt",
      image.width AS "primaryImageWidth",
      image.height AS "primaryImageHeight",
      AVG(review.rating) AS rating
    FROM
      "Product" product
    LEFT JOIN
      "Image" image ON product."primaryImageId" = image.id
    LEFT JOIN
      "Review" review ON product.id = review."productId"
    ${buildWhere({ ids, search, categoryId, collectionId })}
    GROUP BY
      product.id, image.id
    ORDER BY
      ${sortByToSql[sortBy]} ${sortDirectionToSql[sortDirection]} NULLS LAST
    LIMIT ${pageSize} OFFSET ${buildOffset({ page, pageSize })}`;

    return z.array(rawProductSchema).parse(result);
  };
