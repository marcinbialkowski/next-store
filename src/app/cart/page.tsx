import { CartPageTemplate } from '@/components/templates/cart-page-template';
import { getCartFromCookie } from '@/services/orders';

const CartPage = async () => {
  const cart = await getCartFromCookie();

  return <CartPageTemplate cart={cart} />;
};

export default CartPage;
