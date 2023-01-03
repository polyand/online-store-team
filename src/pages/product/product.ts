import { createHtmlElement } from 'utils/createHtml';
import { getGlobalProductId } from 'utils/getGlobalProductId';
import { fillProductPage } from './product-utils/fill-product-page';
import ProductHTML from './product.html';
import './product.scss';

export const product = () => {
  return createHtmlElement(ProductHTML);
};

export const productActions = () => {
  fillProductPage(getGlobalProductId());
};
