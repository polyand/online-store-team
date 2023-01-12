import { createHtmlElement } from 'utils/createHtml';
import { createCheckboxFilter } from './home-utils/createCheckboxFilter';
import { createRangeFilters } from './home-utils/createRangeFilters';
import { sortProducts } from './home-utils/createSortProducts';
import { searchProducts } from './home-utils/searchProducts';
import { changeViewProducts } from './home-utils/changeViewProducts';
import { createProductsList } from './home-utils/createProductsList';
import { useCheckboxFilter } from './home-utils/useCheckboxFilter';
import { useTextFilter } from './home-utils/useTextFilter';
import { resetFilters } from './home-utils/resetFilters';
import { copyLink } from './home-utils/copyLink';
import { loadProductsFromCart } from 'utils/saveCart';
import HomeHTML from './home.html';
import './home.scss';

export class HomePage {
  home() {
    return createHtmlElement(HomeHTML);
  }
  homeActions() {
    createCheckboxFilter('category');
    createCheckboxFilter('type');
    createRangeFilters('price');
    createRangeFilters('stock');
    sortProducts();
    searchProducts();
    changeViewProducts();
    createProductsList();
    useTextFilter();
    useCheckboxFilter('category');
    useCheckboxFilter('type');
    loadProductsFromCart();
    resetFilters();
    copyLink();
  }
}