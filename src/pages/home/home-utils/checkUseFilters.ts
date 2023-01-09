import { getInputElement } from 'utils/getInputElement';
import { filters } from './filtredProducts';
import { price, stock } from './createRangeFilters';

export function checkUseFilters(): boolean {
  for (const key in filters) {
    if (key === 'stock' || key === 'price') {
      const value = key === 'price' ? price : stock;
      const fromRange = getInputElement(document, `#from${key[0].toUpperCase() + key.slice(1)}`);
      const toRange = getInputElement(document, `#to${key[0].toUpperCase() + key.slice(1)}`);
      if (fromRange.value != `${value[0]}` || toRange.value != `${value[1]}`) {
        return true;
      }
    } else {
      if ((key === 'type' || key === 'category' || key === 'text') && filters[key].length > 0) {
        return true;
      }
    }
  }
  return false;
}
