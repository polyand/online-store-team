import { getProductData } from './getProductById';
import { CartProducts, Promocodes } from './types';

export function getTotalCost(inCart: CartProducts, promocodes?: Promocodes): string {
  let totalCost = 0;
  for (let i = 0; i < inCart.id.length; i++) {
    const product = getProductData(inCart.id[i]);
    totalCost += inCart.amount[i] * product.price;
  }
  if (promocodes && promocodes.name.length > 0) {
    const totalDiscount = promocodes.percentDicsount.reduce((acc, cur) => acc + cur, 0);
    totalCost = totalCost * (1 - totalDiscount / 100);
  }
  const resultCost = totalCost.toFixed(2);
  return resultCost;
}
