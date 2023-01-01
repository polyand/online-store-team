import { createHtmlElement } from 'utils/createHtml';
import modalHTML from './modal.html';
import './modal.scss';

export const modal = (() => {
  return createHtmlElement(modalHTML);
})();
