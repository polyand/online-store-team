import { getHtmlElement } from 'utils/getHtmlElement';

export function jumpHomePage(): void {
  const homeLogoElem = getHtmlElement(document, '.header__logo');
  homeLogoElem.addEventListener('click', () => (window.location.href = `${window.location.origin}/`));
}
