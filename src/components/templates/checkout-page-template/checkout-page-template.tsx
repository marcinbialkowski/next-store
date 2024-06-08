import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { StripeForm } from '@/components/molecules/stripe-form';

interface CheckoutPageTemplateProps {
  stripeClientSecret: string;
}

export const CheckoutPageTemplate = ({
  stripeClientSecret,
}: CheckoutPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle>Checkout</PageTitle>
    </MainBanner>
    <div className="container pt-14">
      <StripeForm clientSecret={stripeClientSecret} />
    </div>
  </>
);
