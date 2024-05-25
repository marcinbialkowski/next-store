import { type Product } from '@/services/products';
import { formatMoney } from '@/utils/format-money';

interface ProductPriceProps {
  className?: string;
  price: Product['price'];
}

export const ProductPrice = ({ className, price }: ProductPriceProps) => (
  <p className={className}>
    <span className="sr-only">Price:</span>
    <span data-testid="product-price">{formatMoney(price)}</span>
  </p>
);
