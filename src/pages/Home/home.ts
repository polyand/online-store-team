import { createHtmlElement } from 'utils/createHtml';
import HomeHTML from './home.html';
import './home.scss';

export const home = () => {
  return createHtmlElement(HomeHTML);
};
