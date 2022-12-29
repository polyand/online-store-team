import { getHtmlElement } from 'utils/getHtmlElement';
import { getTotalCost } from 'utils/getTotalCost';
import { CartProducts, Promocodes } from 'utils/types';
import { promoCodes } from './promo-codes';

export function changeSummaryCost(inCart: CartProducts, promoObj?: Promocodes): void {
  const summaryCost = getHtmlElement(document, '.summary__products-cost');
  const totalCost = getTotalCost(inCart);
  summaryCost.textContent = `${totalCost}`;
  if (promoObj?.name.length) {
    const summaryCostDiscount = getHtmlElement(document, '.summary__products-cost-promo');
    const cost = getHtmlElement(document, '.summary__price');
    const costDiscount = getHtmlElement(document, '.summary__price-promo');
    const totalCostDiscount = getTotalCost(inCart, promoCodes);
    summaryCostDiscount.textContent = `${totalCostDiscount}`;
    cost.classList.add('cross-out');
    costDiscount.classList.remove('cart-hide');
  }
}
