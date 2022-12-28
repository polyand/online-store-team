import { createHtmlElement } from 'utils/createHtml';
import { createProductItem } from './cart-utils/create-product-item';
import { inCart, loadProductsFromCart } from 'utils/saveCart';
import cartHTML from './cart.html';
import './cart.scss';
import { changeSummaryCost } from './cart-utils/change-sum-cost';
import { changeSummaryAmount } from './cart-utils/change-sum-amount';
import { getHtmlElement } from 'utils/getHtmlElement';
import { promoCodes, stylePromo } from './cart-utils/promo-codes';
import { addDelPromocode } from './cart-utils/add-del-promocode';

export const cart = () => {
  return createHtmlElement(cartHTML);
};

export function cartActions() {
  loadProductsFromCart();
  changeSummaryCost(inCart, promoCodes);
  changeSummaryAmount(inCart);
  createProductItem(inCart);
  const input = getHtmlElement(document, '.summary__promo-input');
  input.addEventListener('input', stylePromo);
  addDelPromocode();
}
