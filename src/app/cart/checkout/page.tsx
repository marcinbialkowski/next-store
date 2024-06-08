import { redirect } from 'next/navigation';
import { CheckoutPageTemplate } from '@/components/templates/checkout-page-template';
import { createPaymentIntent } from '@/services/payments';

const CheckoutPage = async () => {
  let clientSecret;

  try {
    clientSecret = await createPaymentIntent();
  } catch (error) {
    redirect('/cart');
  }

  return <CheckoutPageTemplate stripeClientSecret={clientSecret} />;
};

export default CheckoutPage;
