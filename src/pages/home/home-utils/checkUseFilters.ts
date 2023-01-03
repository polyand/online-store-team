import { getHtmlElement } from 'utils/getHtmlElement';
import { filters } from './filtredProducts';
import { price, stock } from './createRangeFilters';

export function checkUseFilters(): boolean {
  for (const key in filters) {
    if (key === 'stock' || key === 'price') {
      const value = key === 'price' ? price : stock;

      const fromRange = getHtmlElement(document, `#from${key[0].toUpperCase() + key.slice(1)}`) as HTMLInputElement;
      if (!(fromRange instanceof HTMLInputElement)) {
        throw new Error('Must be an HTMLInputElement!');
      }

      const toRange = getHtmlElement(document, `#to${key[0].toUpperCase() + key.slice(1)}`) as HTMLInputElement;
      if (!(toRange instanceof HTMLInputElement)) {
        throw new Error('Must be an HTMLInputElement!');
      }

      if (fromRange.value != `${value[0]}` || toRange.value != `${value[1]}`) {
        return true;
      }
    } else {
      if (filters[key].length > 0) {
        return true;
      }
    }
  }
  return false;
}
