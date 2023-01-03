import { createHtmlElement } from 'utils/createHtml';
import { createCheckboxFilter } from './home-utils/createCheckboxFilter';
import { createRangeFilters } from './home-utils/createRangeFilters';
import { sortProducts } from './home-utils/sortProducts';
import { searchProducts } from './home-utils/searchProducts';
import { changeViewProducts } from './home-utils/changeViewProducts';
import { createProductsList } from './home-utils/createProductsList';
import { addDeleteProduct } from './home-utils/addDeleteProduct';
import { useCheckboxFilter } from './home-utils/useCheckboxFilter';
import { useTextFilter } from './home-utils/useTextFilter';
import HomeHTML from './home.html';
import './home.scss';

export const home = () => {
  return createHtmlElement(HomeHTML);
};

export function homeActions() {
  createCheckboxFilter('category');
  createCheckboxFilter('type');
  createRangeFilters('price');
  createRangeFilters('stock');
  sortProducts();
  searchProducts();
  changeViewProducts();
  createProductsList();
  addDeleteProduct();
  useTextFilter();
  useCheckboxFilter('category');
  useCheckboxFilter('type');
}
