import { Link } from '@/components/atoms/link';
import { ProductImage } from '@/components/atoms/product-image';
import { ChangeCartItemQuantity } from '@/components/molecules/change-cart-item-quantity';
import { RemoveCartItem } from '@/components/molecules/remove-cart-item';
import { formatMoney } from '@/utils/format-money';
import { getOrderItemTotal, type OrderItem } from '@/services/orders';

interface CartItemProps {
  item: OrderItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { product } = item;
  const image = product.primaryImage;

  return (
    <li className="grid grid-cols-[theme(spacing.36)_1fr] grid-rows-[1fr_min-content] gap-x-6 gap-y-4 py-4 md:grid-cols-[theme(spacing.36)_min-content_1fr]">
      {image && (
        <Link className="md:row-span-2" href={`/product/${product.slug}`}>
          <ProductImage className="rounded-t-lg" image={image} />
        </Link>
      )}
      <div className="flex flex-col gap-y-3 pt-3 text-lg md:col-span-2 md:flex-row md:justify-between">
        <Link
          className="font-bold hover:underline"
          href={`/product/${product.slug}`}
        >
          <h3>{product.name}</h3>
        </Link>
        <span className="text-gray-600">
          {formatMoney(getOrderItemTotal(item))}
        </span>
      </div>
      <RemoveCartItem
        className="self-center justify-self-center md:col-start-3 md:row-start-2 md:mx-3 md:mb-3 md:justify-self-start"
        productId={item.product.id}
      />
      <ChangeCartItemQuantity
        className="mr-3 justify-self-end md:col-start-2 md:row-start-2 md:mb-3 md:mr-0 md:justify-self-start"
        productId={item.product.id}
        quantity={item.quantity}
      />
    </li>
  );
};
