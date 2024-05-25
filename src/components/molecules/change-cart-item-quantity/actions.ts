'use server';

import { revalidatePath } from 'next/cache';
import { changeCartItemQuantity } from '@/services/orders';

export const changeQuantity = async (productId: string, quantity: number) => {
  await changeCartItemQuantity(productId, quantity);
  revalidatePath('/cart');
};
