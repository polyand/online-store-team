import { createHtmlElement } from 'utils/createHtml';
import cartHTML from './cart.html';
import './cart.scss';

export const cart = () => {
  return createHtmlElement(cartHTML);
};
