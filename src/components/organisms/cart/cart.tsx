import { CartItemList } from '@/components/organisms/cart-item-list';
import { CartSummary } from '@/components/molecules/cart-summary';
import { type Order } from '@/services/orders';

interface CartProps {
  cart: Order;
}

export const Cart = ({ cart }: CartProps) => (
  <div className="flex flex-col gap-8">
    <CartItemList cart={cart} />
    <CartSummary cart={cart} className="ml-auto w-full md:w-80" />
  </div>
);
