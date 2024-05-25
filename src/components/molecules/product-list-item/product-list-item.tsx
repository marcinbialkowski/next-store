import { Link } from '@/components/atoms/link';
import { ProductImage } from '@/components/atoms/product-image';
import { ProductListItemDescription } from '@/components/atoms/product-list-item-description';
import { type Product } from '@/services/products';

interface ProductListItemProps {
  product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => (
  <li>
    <article className="flex w-full flex-col rounded-lg bg-white shadow">
      <Link href={`/product/${product.slug}`}>
        <ProductImage className="rounded-t-lg" image={product.primaryImage} />
        <ProductListItemDescription product={product} />
      </Link>
    </article>
  </li>
);
