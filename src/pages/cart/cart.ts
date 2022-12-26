import { createHtmlElement } from 'utils/createHtml';

import { createProductItem } from './cart-components/create-product-item';
import { inCart } from './cart-components/save-cart';
import cartHTML from './cart.html';
import './cart.scss';

export const cart = () => {
  return createHtmlElement(cartHTML);
};

export function cartActions() {
  createProductItem(inCart);
}
