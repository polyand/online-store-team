import { getHtmlElement } from 'utils/getHtmlElement';
import { getInputElement } from 'utils/getInputElement';
import { price, stock, controlfromRange, controltoRange } from './createRangeFilters';

export function setRangeFilters(kind: 'price' | 'stock', queryParams: string[] | string): void {
  const [unit, value, color] = kind === 'price' ? ['$', price, '#e0eff6'] : ['', stock, '#fff4e7'];
  const fromRange = getInputElement(document, `#from${kind[0].toUpperCase() + kind.slice(1)}`);
  const toRange = getInputElement(document, `#to${kind[0].toUpperCase() + kind.slice(1)}`);
  const fromRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__from-value`);
  const toRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__to-value`);
  if (queryParams.length === 0) {
    fromRange.value = `${value[0]}`;
    toRange.value = `${value[1]}`;
  } else {
    fromRange.value = `${queryParams[0]}`;
    toRange.value = `${queryParams[1]}`;
  }
  controlfromRange(fromRange, toRange, color, fromRangeValue, kind, unit);
  controltoRange(fromRange, toRange, color, toRangeValue, kind, unit);
}
