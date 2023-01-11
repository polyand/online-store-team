import { headerActions } from 'components/header/header';
import { dropFromCart } from 'utils/dropFromCart';
import { getGlobalProductId } from 'utils/getGlobalProductId';
import { getHtmlElement } from 'utils/getHtmlElement';
import { displayCartButton } from './display-cart-button';

function getDroppedId() {
  const productId = getGlobalProductId();
  if (productId) {
    dropFromCart(productId);
    headerActions();
    displayCartButton();
  }
}

export function dropProductFromCart() {
  const dropButton = getHtmlElement(document, '#product_drop');
  dropButton.addEventListener('click', getDroppedId);
}
