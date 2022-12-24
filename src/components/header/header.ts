import { createHtmlElement } from 'utils/createHtml';
import headerHTML from './header.html';
import './header.scss';
export const header = (() => {
  return createHtmlElement(headerHTML);
})();
