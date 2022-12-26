import { getHtmlElement } from 'utils/getHtmlElement';
import { CartProducts, ProductProperties } from 'utils/types';
import productsData from '../../../data/data.json';
import { changeProductAmount } from './change-product-amount';
import { triggerEmptyCart } from './trigger-empty-cart';

function getProductData(productId: number) {
  const items = productsData.products;
  let product: ProductProperties | undefined;
  items.forEach((item) => {
    if (item.id === productId) {
      product = item;
    }
  });
  if (!product) {
    throw new Error('Can not find product by ID!');
  }
  return product;
}

export function createProductItem(productsInCart: CartProducts) {
  if (productsInCart.id.length === 0) {
    triggerEmptyCart();
  }
  const productsList = getHtmlElement(document, '.products__list');
  productsList.innerHTML = '';
  for (let i = 0; i < productsInCart.id.length; i++) {
    const productData = getProductData(productsInCart.id[i]);
    // Create productItem
    const productItem = document.createElement('li');
    productItem.className = 'products__list-item item';
    // Create productItem childs
    const itemNumber = document.createElement('span');
    itemNumber.className = 'item__number';
    itemNumber.textContent = `${i + 1}`;
    const itemImage = document.createElement('img');
    itemImage.className = 'item__image';
    itemImage.src = `${productData.thumbnail}`;
    const itemText = document.createElement('div');
    itemText.className = 'item__text';
    // Create itemText childs
    const itemTextBrand = document.createElement('div');
    itemTextBrand.className = 'item__text-brand';
    // Create itemTextBrand childs
    const itemTextName = document.createElement('span');
    itemTextName.className = 'item__text-name';
    itemTextName.textContent = `${productData.title}`;
    const itemTextCategory = document.createElement('span');
    itemTextCategory.className = 'item__text-category';
    itemTextCategory.textContent = `${productData.category}`;
    // Append itemTextBrand childs
    itemTextBrand.append(itemTextName);
    itemTextBrand.append(itemTextCategory);
    // Create itemText childs
    const itemTextDesc = document.createElement('div');
    itemTextDesc.className = 'item__text-desc';
    itemTextDesc.textContent = `${productData.description}`;
    // Append itemText childs
    itemText.append(itemTextBrand);
    itemText.append(itemTextDesc);
    // Create productItem childs
    const itemInfo = document.createElement('div');
    itemInfo.className = 'item__info';
    // Create itemInfo childs
    const itemInfoStock = document.createElement('div');
    itemInfoStock.className = 'item__info-stock';
    itemInfoStock.textContent = 'Stock: ';
    // Create itemInfoStock childs
    const stockAmount = document.createElement('span');
    stockAmount.className = 'stock-amount';
    stockAmount.textContent = `${productData.stock}`;
    // Append itemInfoStock childs
    itemInfoStock.append(stockAmount);
    // Create itemInfo childs
    const itemInfoControls = document.createElement('div');
    itemInfoControls.className = 'item__info-controls controls';
    // Create itemInfoControls childs
    const controlDel = document.createElement('button');
    controlDel.className = 'controls-del';
    controlDel.textContent = '-';
    const controlAmount = document.createElement('span');
    controlAmount.className = 'controls-amount';
    controlAmount.textContent = `${productsInCart.amount[i]}`;
    const controlAdd = document.createElement('button');
    controlAdd.className = 'controls-add';
    controlAdd.textContent = '+';
    // Append itemInfoControls childs
    itemInfoControls.append(controlDel);
    itemInfoControls.append(controlAmount);
    itemInfoControls.append(controlAdd);
    // Create itemInfo childs
    const itemInfoPrice = document.createElement('div');
    itemInfoPrice.className = 'item__info-price';
    itemInfoPrice.textContent = '$';
    // Create itemInfoPrice childs
    const priceAmount = document.createElement('span');
    priceAmount.className = 'price-amount';
    priceAmount.textContent = `${productData.price * productsInCart.amount[i]}`;
    // Append itemInfoPrice childs
    itemInfoPrice.append(priceAmount);
    // Append itemInfo childs
    itemInfo.append(itemInfoStock);
    itemInfo.append(itemInfoControls);
    itemInfo.append(itemInfoPrice);
    // Append productItem childs
    productItem.append(itemNumber);
    productItem.append(itemImage);
    productItem.append(itemText);
    productItem.append(itemInfo);
    // Append productItem to ul element
    changeProductAmount(productItem, productData, i);
    productsList.append(productItem);
  }
  return productsList;
}
