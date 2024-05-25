import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '../orders.const';
import { type Order } from '../orders.types';
import { type PrismaBaseClient } from '@/db';

const getCartIdCookie = () => cookies().get(CART_COOKIE_NAME)?.value;

const getCart =
  (prisma: PrismaBaseClient) =>
  async (cartId: string): Promise<Order | null> =>
    prisma.order.findUnique({
      where: { id: cartId, status: 'CREATED' },
      include: {
        items: {
          include: { product: { include: { primaryImage: true } } },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

export const getCartFromCookie =
  (prisma: PrismaBaseClient) => async (): Promise<Order | null> => {
    const cartId = getCartIdCookie();

    if (!cartId) {
      return null;
    }

    return getCart(prisma)(cartId);
  };

export const getCartFromCookieOrThrow =
  (prisma: PrismaBaseClient) => async (): Promise<Order> => {
    const cart = await getCartFromCookie(prisma)();

    if (!cart) {
      throw new Error("Cart doesn't exist");
    }

    return cart;
  };
