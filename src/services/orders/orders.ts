import {
  ensureCanEditOrder,
  getCartFromCookie as getCartFromCookieUtil,
  getCartFromCookieOrThrow as getCartFromCookieOrThrowUtil,
  getOrCreateCart as getOrCreateCartUtil,
} from './orders.utils';
import { prisma } from '@/db';

export const addProductToCart = async (productId: string) => {
  await prisma.$transaction(async (client) => {
    const cart = await getOrCreateCartUtil(client)();

    ensureCanEditOrder(cart);

    await client.orderItem.upsert({
      where: { productId_orderId: { orderId: cart.id, productId } },
      update: { quantity: { increment: 1 } },
      create: {
        quantity: 1,
        productId: productId,
        orderId: cart.id,
      },
    });
  });
};

export const removeCartItem = async (productId: string) => {
  await prisma.$transaction(async (client) => {
    const cart = await getCartFromCookieOrThrowUtil(client)();

    ensureCanEditOrder(cart);

    await client.orderItem.delete({
      where: { productId_orderId: { orderId: cart.id, productId } },
    });
  });
};

export const changeCartItemQuantity = async (
  productId: string,
  quantity: number,
) => {
  if (quantity < 1) {
    throw new Error('Quantity cannot be less than 1');
  }

  await prisma.$transaction(async (client) => {
    const cart = await getCartFromCookieOrThrowUtil(client)();

    ensureCanEditOrder(cart);

    await client.orderItem.update({
      where: { productId_orderId: { orderId: cart.id, productId } },
      data: { quantity },
    });
  });
};

export const getCartFromCookie = getCartFromCookieUtil(prisma);
export const getCartFromCookieOrThrow = getCartFromCookieOrThrowUtil(prisma);
