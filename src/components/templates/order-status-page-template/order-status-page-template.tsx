import type Stripe from 'stripe';
import { OrderStatus } from '@/components/atoms/order-status';

interface OrderStatusPageTemplateProps {
  status: Stripe.PaymentIntent.Status;
}

export const OrderStatusPageTemplate = ({
  status,
}: OrderStatusPageTemplateProps) => (
  <div className="container pt-14">
    <OrderStatus status={status} />
  </div>
);
