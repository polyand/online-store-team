import { headerActions } from 'components/header/header';
import { addToCart } from 'utils/addToCart';
import { getGlobalProductId } from 'utils/getGlobalProductId';
import { getHtmlElement } from 'utils/getHtmlElement';
import { displayCartButton } from './display-cart-button';

function getAddedId() {
  const productId = getGlobalProductId();
  if (productId) {
    addToCart(productId);
    headerActions();
    displayCartButton();
  }
}

export function addProductToCart() {
  const addButton = getHtmlElement(document, '#product_add');
  addButton.addEventListener('click', getAddedId);
}
