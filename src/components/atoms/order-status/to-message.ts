import type Stripe from 'stripe';

export const toMessage = (status: Stripe.PaymentIntent.Status) => {
  switch (status) {
    case 'succeeded':
      return 'Payment succeeded!';
    case 'processing':
      return 'Your payment is processing.';
    default:
      return 'Your payment was not successful, please try again.';
  }
};
