import type {
  Order as OrderModel,
  OrderItem as OrderItemModel,
} from '@prisma/client';
import { type Product } from '../products';

export interface OrderItem extends OrderItemModel {
  product: Omit<Product, 'rating'>;
}

export interface Order extends OrderModel {
  items: OrderItem[];
}

export { type OrderStatus } from '@prisma/client';
