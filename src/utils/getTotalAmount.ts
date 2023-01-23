import { CartProducts } from './types';

export function getTotalAmount(inCart: CartProducts): number {
  let totalAmount = 0;
  for (let i = 0; i < inCart.id.length; i++) {
    totalAmount += inCart.amount[i];
  }
  return totalAmount;
}
