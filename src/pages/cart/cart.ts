import { createHtmlElement } from 'utils/createHtml';
import { createProductItem } from './cart-utils/create-product-item';
import { inCart, loadProductsFromCart } from 'utils/saveCart';
import cartHTML from './cart.html';
import './cart.scss';

export const cart = () => {
  return createHtmlElement(cartHTML);
};

export function cartActions() {
  loadProductsFromCart();
  createProductItem(inCart);
}
