import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '../orders.const';
import { type Order } from '../orders.types';
import { getCartFromCookie } from './get-cart-from-cookie';
import { type PrismaBaseClient } from '@/db';

const setCartIdCookie = (cartId: string) =>
  cookies().set(CART_COOKIE_NAME, cartId, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: true,
  });

const createCart = (prisma: PrismaBaseClient) => async () => {
  const cart = await prisma.order.create({ data: {} });
  setCartIdCookie(cart.id);

  return { ...cart, items: [] };
};

export const getOrCreateCart =
  (prisma: PrismaBaseClient) => async (): Promise<Order> => {
    const cart = await getCartFromCookie(prisma)();

    if (!cart) {
      return createCart(prisma)();
    }

    return cart;
  };
