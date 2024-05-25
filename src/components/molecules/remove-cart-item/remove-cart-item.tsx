import { revalidatePath } from 'next/cache';
import { RemoveCartItemButton } from '@/components/atoms/remove-cart-item-button';
import { removeCartItem } from '@/services/orders';
import { type Product } from '@/services/products';

interface RemoveCartItemProps {
  className?: string;
  productId: Product['id'];
}

export const RemoveCartItem = ({
  className,
  productId,
}: RemoveCartItemProps) => {
  const removeCartItemAction = async () => {
    'use server';
    await removeCartItem(productId);
    revalidatePath('/cart');
  };

  return (
    <form action={removeCartItemAction} className={className}>
      <RemoveCartItemButton />
    </form>
  );
};
