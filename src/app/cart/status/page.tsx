import { notFound } from 'next/navigation';
import { OrderStatusPageTemplate } from '@/components/templates/order-status-page-template';
import { getPaymentIntentStatus } from '@/services/payments';

interface OrderStatusPageProps {
  searchParams?: {
    payment_intent?: string;
    payment_intent_client_secret?: string;
  };
}

const OrderStatusPage = async ({ searchParams }: OrderStatusPageProps) => {
  if (
    !searchParams?.payment_intent ||
    !searchParams?.payment_intent_client_secret
  ) {
    notFound();
  }

  const status = await getPaymentIntentStatus(
    searchParams.payment_intent,
    searchParams.payment_intent_client_secret,
  );

  return <OrderStatusPageTemplate status={status} />;
};

export default OrderStatusPage;
