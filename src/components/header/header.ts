import { promoCodes } from 'pages/cart/cart-utils/promo-codes';
import { createHtmlElement } from 'utils/createHtml';
import { inCart } from 'utils/saveCart';
import { changeHeaderAmount } from './header-utils/change-header-amount';
import { changeHeaderCost } from './header-utils/change-header-cost';
import { jumpHomePage } from './header-utils/jump-home-page';
import headerHTML from './header.html';
import './header.scss';
export const header = (() => {
  return createHtmlElement(headerHTML);
})();

export function headerActions() {
  changeHeaderCost(inCart, promoCodes);
  changeHeaderAmount(inCart);
  jumpHomePage();
}
