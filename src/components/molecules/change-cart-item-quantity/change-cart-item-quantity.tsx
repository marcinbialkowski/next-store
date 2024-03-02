'use client';

import clsx from 'clsx';
import { useOptimistic } from 'react';
import { changeQuantity } from './actions';
import type { CartFragment, CartItemFragment } from '@/graphql/client';
import { ChangeCartItemQuantityButton } from '@/components/atoms/change-cart-item-quantity-button';

interface ChangeCartItemQuantityProps {
  cartId: CartFragment['id'];
  className?: string;
  productId: CartItemFragment['product']['id'];
  quantity: CartItemFragment['quantity'];
}

export const ChangeCartItemQuantity = ({
  cartId,
  className,
  productId,
  quantity,
}: ChangeCartItemQuantityProps) => {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

  const handleChange = async (newQuantity: number) => {
    setOptimisticQuantity(newQuantity);
    await changeQuantity(cartId, productId, newQuantity);
  };

  return (
    <form className={clsx(className, 'flex items-center gap-3')}>
      <ChangeCartItemQuantityButton
        data-testid="decrement"
        disabled={optimisticQuantity === 1}
        formAction={() => handleChange(optimisticQuantity - 1)}
      >
        -
      </ChangeCartItemQuantityButton>
      <span
        className="min-w-[1ch] text-center font-bold"
        data-testid="quantity"
      >
        {optimisticQuantity}
      </span>
      <ChangeCartItemQuantityButton
        data-testid="increment"
        formAction={() => handleChange(optimisticQuantity + 1)}
      >
        +
      </ChangeCartItemQuantityButton>
    </form>
  );
};
