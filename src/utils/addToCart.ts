import { inCart, saveProductsInCart } from './saveCart';

export function addToCart(productId: number): void {
  const inCartIndex = inCart.id.indexOf(productId);
  if (inCartIndex === -1) {
    inCart.id.push(productId);
    inCart.amount.push(1);
  } else {
    inCart.amount[inCartIndex]++;
  }
  saveProductsInCart();
  console.log(inCart);
}
