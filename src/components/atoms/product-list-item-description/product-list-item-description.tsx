import { ProductPrice } from '@/components/atoms/product-price';
import { Rating } from '@/components/molecules/rating';
import { type Product } from '@/services/products';

interface ProductListItemDescriptionProps {
  product: Product;
}

export const ProductListItemDescription = ({
  product,
}: ProductListItemDescriptionProps) => (
  <div className="grid h-24 grid-cols-[1fr_max-content] gap-x-3 gap-y-1 px-3 pb-3 pt-2">
    <h3 className="line-clamp-2 h-[2lh] font-bold">{product.name}</h3>
    <ProductPrice
      className="justify-self-end text-gray-600"
      price={product.price}
    />
    <Rating
      className="col-span-2 justify-self-end text-sm"
      rating={product.rating}
      starSize={16}
    />
  </div>
);
