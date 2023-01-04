import { getGlobalProductId } from 'utils/getGlobalProductId';
import { getHtmlElement } from 'utils/getHtmlElement';
import { inCart } from 'utils/saveCart';

export function displayCartButton() {
  const addButton = getHtmlElement(document, '#product_add');
  const dropButton = getHtmlElement(document, '#product_drop');
  const productId = getGlobalProductId();
  if (productId) {
    if (inCart.id.includes(productId)) {
      addButton.classList.add('product-hide');
      dropButton.classList.remove('product-hide');
    } else {
      addButton.classList.remove('product-hide');
      dropButton.classList.add('product-hide');
    }
  }
}
