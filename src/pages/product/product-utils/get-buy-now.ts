import { addToCart } from 'utils/addToCart';
import { getGlobalProductId } from 'utils/getGlobalProductId';
import { getHtmlElement } from 'utils/getHtmlElement';
import { inCart } from 'utils/saveCart';

function getAddedActions() {
  const productId = getGlobalProductId();
  if (productId) {
    if (inCart.id.includes(productId)) {
      window.location.href = `${window.location.origin}/cart?modal=true`;
    } else {
      addToCart(productId);
      window.location.href = `${window.location.origin}/cart?modal=true`;
    }
  }
}

export function getBuyNow() {
  const buyButton = getHtmlElement(document, '.product__details-buy-now-button');
  buyButton.addEventListener('click', getAddedActions);
}
