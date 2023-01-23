import { getHtmlElement } from 'utils/getHtmlElement';
import { useSortProducts } from './useSortProducts';

export function setSortProducts(queryParams: string[] | string): void {
  const sortButton = getHtmlElement(document, '.sort__button');
  if (queryParams.length === 0 && Array.isArray(queryParams)) {
    queryParams[0] = 'Sort options:';
  }
  sortButton.textContent = queryParams[0];
  useSortProducts();
}
