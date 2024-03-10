import clsx from 'clsx';
import { type CartFragment } from '@/graphql/client';
import { Link } from '@/components/atoms/link';
import { formatMoney } from '@/utils/format-money';
import { getCartTotal } from '@/utils/get-cart-total';

interface CartSummaryProps {
  cart: CartFragment;
  className?: string;
}

export const CartSummary = ({ cart, className }: CartSummaryProps) => (
  <section className={clsx(className, 'flex flex-col justify-end gap-6')}>
    <h2 className="sr-only">Order summary</h2>
    <span className="flex justify-between text-lg font-bold">
      <span>Total:</span>
      <span>{formatMoney(getCartTotal(cart))}</span>
    </span>
    <Link
      className="rounded-md border bg-green-700 px-8 py-3 tracking-wider text-white hover:bg-green-800 focus-visible:outline-offset-4 active:bg-green-900"
      href="/cart/checkout"
    >
      Checkout
    </Link>
  </section>
);
