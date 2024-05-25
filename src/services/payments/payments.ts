import { getStripe } from './payments.utils';
import { getCartFromCookieOrThrow, getOrderTotal } from '@/services/orders';
import { paymentIntentMetadataSchema } from '@/services/payments/payments.schema';

export const createPaymentIntent = async () => {
  const cart = await getCartFromCookieOrThrow();
  const amount = getOrderTotal(cart);

  if (!amount) {
    throw new Error('No products in the cart');
  }

  const paymentIntent = await getStripe().paymentIntents.create({
    amount,
    payment_method_types: ['card'],
    currency: 'usd',
    metadata: paymentIntentMetadataSchema.parse({
      orderId: cart.id,
    }),
  });

  if (!paymentIntent.client_secret) {
    throw new Error('Missing paymentIntent.client_secret');
  }

  return paymentIntent.client_secret;
};

export const getPaymentIntentStatus = async (
  id: string,
  clientSecret: string,
) => {
  const paymentIntent = await getStripe().paymentIntents.retrieve(id);

  if (paymentIntent.client_secret !== clientSecret) {
    throw Error('Invalid client secret');
  }

  return paymentIntent.status;
};
