import { createHtmlElement } from 'utils/createHtml';
import { createCheckboxFilter } from './home-utils/createCheckboxFilter';
import { useRangeFilters } from './home-utils/useRangeFilters';
import { sortProducts } from './home-utils/sortProducts';
import { searchProducts } from './home-utils/searchProducts';
import { changeViewProducts } from './home-utils/changeViewProducts';
import { createProductsList } from './home-utils/createProductsList';
import { addDeleteProduct } from './home-utils/addDeleteProduct';
import HomeHTML from './home.html';
import './home.scss';

export const home = () => {
  return createHtmlElement(HomeHTML);
};

export function homeActions() {
  createCheckboxFilter('category');
  createCheckboxFilter('type');
  useRangeFilters();
  sortProducts();
  searchProducts();
  changeViewProducts();
  createProductsList();
  addDeleteProduct();
}
