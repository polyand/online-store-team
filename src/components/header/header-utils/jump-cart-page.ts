import { getHtmlElement } from 'utils/getHtmlElement';

export function jumpCartPage(): void {
  const cartLogoElem = getHtmlElement(document, '.header__cart');
  cartLogoElem.addEventListener('click', () => (window.location.href = `${window.location.origin}/cart`));
}
