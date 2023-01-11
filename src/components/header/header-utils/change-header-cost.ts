import { getHtmlElement } from 'utils/getHtmlElement';
import { getTotalCost } from 'utils/getTotalCost';
import { CartProducts, Promocodes } from 'utils/types';

export function changeHeaderCost(inCart: CartProducts, promocodes: Promocodes): void {
  const totalCostElement = getHtmlElement(document, '#total-cost');
  const totalCost = getTotalCost(inCart, promocodes);
  totalCostElement.textContent = `$${totalCost}`;
}
