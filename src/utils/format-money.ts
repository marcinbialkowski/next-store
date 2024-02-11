import type { Money } from '@/types';

export const formatMoney = (money: Money) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money.amount / 100);
