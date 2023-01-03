import { filters, createFiltredCollection } from './filtredProducts';
import { getHtmlElement } from 'utils/getHtmlElement';
import { productsFiltredList } from './createProductsList';
import { compareNumeric } from 'utils/helpersArray';
import { fillSlider, setToggleAccessible } from './createRangeFilters';

export function useRangeFilter(kind: string, value: number, flag: string): void {
  if (flag === 'from') {
    filters[kind][0] = value;
  }
  if (flag === 'to') {
    filters[kind][1] = value;
  }
  createFiltredCollection();
}

export function defaultUseRangeFilter(kind: string, from: number, to: number): void {
  filters[kind][0] = from;
  filters[kind][1] = to;
}

export function correctionRangeValue(kind: string): void {
  const [unit, color] = kind === 'price' ? ['$', '#e0eff6'] : ['', '#fff4e7'];

  let values: number[] = [];

  productsFiltredList.forEach((product) => {
    values.push(product[kind]);
  });

  values = values.sort(compareNumeric);
  values.splice(1, values.length - 2);

  if (values.length === 1) {
    values[1] = values[0];
  }

  const fromRange = getHtmlElement(document, `#from${kind[0].toUpperCase() + kind.slice(1)}`);
  if (!(fromRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }

  const toRange = getHtmlElement(document, `#to${kind[0].toUpperCase() + kind.slice(1)}`);
  if (!(toRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }

  fromRange.value = `${values[0]}`;
  toRange.value = `${values[1]}`;

  const fromRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__from-value`);
  const toRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__to-value`);

  fromRangeValue.innerHTML = `${values[0] + unit}`;
  toRangeValue.innerHTML = `${values[1] + unit}`;

  fillSlider(fromRange, toRange, color, '#07484a', toRange);
  setToggleAccessible(toRange, kind);
}
