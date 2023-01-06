import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import { filtredIdList } from './filtredProducts';
import { useSortProducts } from './useSortProducts';
import { checkUseFilters } from './checkUseFilters';
import { correctionCheckboxItemQuantity } from './correctionCheckboxItemQuantity';

import data from 'data/data.json';

const products: ProductProperties[] = data.products;
export let productsFiltredList: ProductProperties[];

export function createProductsList() {
  const productsList = getHtmlElement(document, '.home__products-list');
  productsFiltredList = [];
  const filtersFlag: boolean = checkUseFilters();
  const fromRangeValuePrice = getHtmlElement(document, `.home__filter-price .filter-range__from-value`);
  const fromRangeNotFoundPrice = getHtmlElement(document, `.home__filter-price .filter-range__not-found`);
  const toRangeValuePrice = getHtmlElement(document, `.home__filter-price .filter-range__to-value`);
  const fromRangeValueStock = getHtmlElement(document, `.home__filter-stock .filter-range__from-value`);
  const fromRangeNotFoundStock = getHtmlElement(document, `.home__filter-stock .filter-range__not-found`);
  const toRangeValueStock = getHtmlElement(document, `.home__filter-stock .filter-range__to-value`);
  const toggleRangeTitleNotFound: HTMLElement[] = [fromRangeNotFoundPrice, fromRangeNotFoundStock];
  const toggleRangeTitleFromTo: HTMLElement[] = [
    fromRangeValuePrice,
    toRangeValuePrice,
    fromRangeValueStock,
    toRangeValueStock,
  ];
  const productsSearchStat = getHtmlElement(document, '.home_search-stat');

  if (filtredIdList.length === 0 && !filtersFlag) {
    productsFiltredList = products;
  } else {
    if (filtredIdList.length === 0 && filtersFlag) {
      productsList.innerHTML = 'Not Products Found';
      productsList.classList.add('home__products-list_not-found');

      toggleRangeTitleNotFound.forEach((element) => {
        if (element.classList.contains('invisible')) {
          element.classList.remove('invisible');
        }
      });
      toggleRangeTitleFromTo.forEach((element) => {
        if (!element.classList.contains('invisible')) {
          element.classList.add('invisible');
        }
      });
      productsSearchStat.innerHTML = 'Found: 0';
      correctionCheckboxItemQuantity('category');
      correctionCheckboxItemQuantity('type');
      return;
    }
    filtredIdList.forEach((id) => {
      products.forEach((product) => {
        if (id === product.id) {
          productsFiltredList.push(product);
        }
      });
    });
  }

  if (productsList.classList.contains('home__products-list_not-found')) {
    productsList.classList.remove('home__products-list_not-found');
  }

  toggleRangeTitleNotFound.forEach((element) => {
    if (!element.classList.contains('invisible')) {
      element.classList.add('invisible');
    }
  });
  toggleRangeTitleFromTo.forEach((element) => {
    if (element.classList.contains('invisible')) {
      element.classList.remove('invisible');
    }
  });
  productsSearchStat.innerHTML = `Found: ${productsFiltredList.length}`;
  useSortProducts();
}