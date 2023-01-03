import { getHtmlElement } from 'utils/getHtmlElement';
import { getProductData } from 'utils/getProductById';

export function fillProductPage(productId: number | undefined): void {
  const crumbCategoryElem = getHtmlElement(document, '.bread-crumbs__category');
  const crumbTypeElem = getHtmlElement(document, '.bread-crumbs__type');
  const crumbNameElem = getHtmlElement(document, '.bread-crumbs__product');
  const imgThumbElem = getHtmlElement(document, '.product__details-thumbnail');
  const img1Elem = getHtmlElement(document, '.product__details-image1');
  const img2Elem = getHtmlElement(document, '.product__details-image2');
  const img3Elem = getHtmlElement(document, '.product__details-image3');
  const nameElem = getHtmlElement(document, '.name-text');
  const categoryElem = getHtmlElement(document, '.category-text');
  const typeElem = getHtmlElement(document, '.type-text');
  const descElem = getHtmlElement(document, '.description-text');
  const stockElem = getHtmlElement(document, '.stock-text');
  const priceElem = getHtmlElement(document, '.product__details-price');
  if (productId) {
    const product = getProductData(productId);
    crumbCategoryElem.textContent = product.category;
    crumbTypeElem.textContent = product.type;
    crumbNameElem.textContent = product.title;
    if (imgThumbElem instanceof HTMLImageElement) {
      imgThumbElem.src = product.images[0];
    }
    if (img1Elem instanceof HTMLImageElement) {
      img1Elem.src = product.images[0];
    }
    if (img2Elem instanceof HTMLImageElement) {
      img2Elem.src = product.images[1];
    }
    if (img3Elem instanceof HTMLImageElement) {
      img3Elem.src = product.images[2];
    }
    nameElem.textContent = product.title;
    categoryElem.textContent = product.category;
    typeElem.textContent = product.type;
    descElem.textContent = product.description;
    stockElem.textContent = `${product.stock}`;
    priceElem.textContent = `$${product.price}`;
  }
}
