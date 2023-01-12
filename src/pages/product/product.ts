import { createHtmlElement } from 'utils/createHtml';
import { getGlobalProductId } from 'utils/getGlobalProductId';
import { loadProductsFromCart } from 'utils/saveCart';
import { addProductToCart } from './product-utils/add-product-to-cart';
import { changeImage } from './product-utils/change-image';
import { displayCartButton } from './product-utils/display-cart-button';
import { dropProductFromCart } from './product-utils/drop-product-from-cart';
import { fillProductPage } from './product-utils/fill-product-page';
import { getBuyNow } from './product-utils/get-buy-now';
import ProductHTML from './product.html';
import './product.scss';

export class ProductPage {
  product() {
    return createHtmlElement(ProductHTML);
  }
  productActions() {
    loadProductsFromCart();
    fillProductPage(getGlobalProductId());
    changeImage();
    displayCartButton();
    addProductToCart();
    dropProductFromCart();
    getBuyNow();
  }
}