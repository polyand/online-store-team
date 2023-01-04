import { filters, createFiltredCollection } from './filtredProducts';
import { getHtmlElement } from 'utils/getHtmlElement';
import { correctionRangeValue } from './useRangeFilter';

export function useTextFilter(): void {
  const searchInput = getHtmlElement(document, `#search`);
  if (!(searchInput instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  searchInput.addEventListener('input', () => {
    searchInput.value = searchInput.value.toLowerCase();
    filters.text = searchInput.value;
    createFiltredCollection();
    correctionRangeValue('price');
    correctionRangeValue('stock');
  });
}
