import { getHtmlElement } from 'utils/getHtmlElement';
import { getTotalAmount } from 'utils/getTotalAmount';
import { CartProducts } from 'utils/types';

export function changeSummaryAmount(inCart: CartProducts): void {
  const summaryAmount = getHtmlElement(document, '.summary__products-amount');
  const totalAmount = getTotalAmount(inCart);
  summaryAmount.textContent = `${totalAmount}`;
}
