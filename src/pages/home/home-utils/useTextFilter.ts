import { filters, createFiltredCollection } from './filtredProducts';
import { getInputElement } from 'utils/getInputElement';
import { correctionRangeValue } from './useRangeFilter';
import { setQueries } from 'utils/queries';

export function useTextFilter(): void {
  const searchInput = getInputElement(document, `#search`);
  searchInput.addEventListener('input', () => {
    searchInput.value = searchInput.value.toLowerCase();
    filters.text = [searchInput.value];
    setQueries({ name: 'search', value: searchInput.value });
    createFiltredCollection();
    correctionRangeValue('price');
    correctionRangeValue('stock');
  });
}
