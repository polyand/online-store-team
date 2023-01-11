import { filters } from './filtredProducts';
import { getInputElement } from 'utils/getInputElement';

export function setTextFilter(queryParams: string[] | string): void {
  const searchInput = getInputElement(document, `#search`);
  if (Array.isArray(queryParams)) {
    if (queryParams.length === 0) {
      queryParams = [''];
    }
    searchInput.value = queryParams[0];
    filters.text = queryParams;
  }
}
