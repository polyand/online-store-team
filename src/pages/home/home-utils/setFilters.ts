import { filters, createFiltredCollection } from './filtredProducts';
import { setCheckboxFilters } from './setCheckboxFilters';
import { setRangeFilters } from './setRangeFilters';
import { setTextFilter } from './setTextFilter';
import { setSortProducts } from './setSortProducts';
import { setViewProducts } from './setViewProducts';
import { correctionRangeValue } from './useRangeFilter';

export function setFilters(queryParams: { [key: string]: string | string[] }): void {
  for (const key in queryParams) {
    if (key === 'category' || key === 'type') {
      filters[key].length = 0;
      setCheckboxFilters(key, queryParams[key]);
    }
    if (key === 'price' || key === 'stock') {
      filters[key].length = 0;
      setRangeFilters(key, queryParams[key]);
    }
    if (key === 'search') {
      setTextFilter(queryParams[key]);
    }
    if (key === 'sort') {
      setSortProducts(queryParams[key]);
    }
    if (key === 'view') {
      setViewProducts(queryParams[key]);
    }
  }
  createFiltredCollection();
  correctionRangeValue('price');
  correctionRangeValue('stock');
}
