import { MainBanner } from '@/components/atoms/main-banner';
import { PageTitle } from '@/components/atoms/page-title';
import { Cart } from '@/components/organisms/cart';
import { EmptyCart } from '@/components/atoms/empty-cart';
import type { Order } from '@/services/orders';

interface CartPageTemplateProps {
  cart: Order | null;
}

export const CartPageTemplate = ({ cart }: CartPageTemplateProps) => (
  <>
    <MainBanner>
      <PageTitle>Your Cart</PageTitle>
    </MainBanner>
    <div className="container pt-14">
      {cart && cart.items.length > 0 ? <Cart cart={cart} /> : <EmptyCart />}
    </div>
  </>
);
