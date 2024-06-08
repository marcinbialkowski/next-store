import type Stripe from 'stripe';
import { toMessage } from './to-message';

interface OrderStatusProps {
  status: Stripe.PaymentIntent.Status;
}

export const OrderStatus = ({ status }: OrderStatusProps) => (
  <p className="text-center text-xl">{toMessage(status)}</p>
);
