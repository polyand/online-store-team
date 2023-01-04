import { ProductProperties } from 'utils/types';
import { buildProductsList } from './buildProductsList';
import { getHtmlElement } from 'utils/getHtmlElement';
import { productsFiltredList } from './createProductsList';

let sort: string | string[];

function sortingProducts(firstProduct: ProductProperties, secondProduct: ProductProperties): number {
  if (firstProduct[sort[0]] > secondProduct[sort[0]]) return 1;
  if (firstProduct[sort[0]] < secondProduct[sort[0]]) return -1;
  return 0;
}

export function useSortProducts(): void {
  sort = getHtmlElement(document, '.sort__button').innerText;
  if (sort === 'Sort options:') {
    buildProductsList();
    return;
  }
  sort = sort.slice(8).split(' ');
  if (sort[1] === 'ASC') {
    productsFiltredList.sort(sortingProducts);
  }
  if (sort[1] === 'DESC') {
    productsFiltredList.sort(sortingProducts).reverse();
  }
  buildProductsList();
}
