import { inCart, saveProductsInCart } from './saveCart';

export function dropFromCart(productId: number): void {
  const inCartIndex = inCart.id.indexOf(productId);
  if (inCartIndex === -1) {
    throw new Error('Cart is not unclude this product!');
  } else {
    inCart.id.splice(inCartIndex, 1);
    inCart.amount.splice(inCartIndex, 1);
  }
  saveProductsInCart();
}
