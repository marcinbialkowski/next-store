import { CartItem } from '@/components/molecules/cart-item';
import type { Order } from '@/services/orders';

interface CartItemListProps {
  cart: Order;
}

export const CartItemList = ({ cart }: CartItemListProps) => (
  <section>
    <h2 className="sr-only">Products in your cart</h2>
    <ul className="divide-y divide-gray-300">
      {cart.items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  </section>
);
