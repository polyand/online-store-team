import { getHtmlElement } from 'utils/getHtmlElement';
import { getTotalAmount } from 'utils/getTotalAmount';
import { CartProducts } from 'utils/types';

export function changeHeaderAmount(inCart: CartProducts): void {
  const totalAmountElement = getHtmlElement(document, '#cart-number');
  const totalAmountContainer = getHtmlElement(document, '.cart__number');
  const totalAmount = getTotalAmount(inCart);
  totalAmountElement.textContent = `${totalAmount}`;
  if (inCart.id.length > 0) {
    totalAmountContainer.classList.remove('invisible');
  } else {
    totalAmountContainer.classList.add('invisible');
  }
}
