import { type Order, type OrderItem } from '../orders.types';

export const ensureCanEditOrder = ({ id, status }: Order) => {
  if (status !== 'CREATED') {
    throw new Error(
      `Order with id ${id} cannot be changed because its status is ${status}`,
    );
  }
};

export const getOrderItemTotal = (item: OrderItem) =>
  item.quantity * item.product.price;

export const getOrderTotal = (cart: Order) =>
  cart.items.reduce((total, item) => total + getOrderItemTotal(item), 0);

export const getOrderItemsCount = (cart: Order) =>
  cart.items.reduce((count, item) => count + item.quantity, 0);

export * from './get-cart-from-cookie';
export * from './get-or-create-cart';
