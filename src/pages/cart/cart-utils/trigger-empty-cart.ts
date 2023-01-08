import { getHtmlElement } from '../../../utils/getHtmlElement';

export function triggerEmptyCart() {
  const empty = getHtmlElement(document, '.cart-wrapper__empty');
  const fill = getHtmlElement(document, '.cart-wrapper__fill');
  empty.classList.toggle('cart-hide');
  fill.classList.toggle('cart-hide');
}
