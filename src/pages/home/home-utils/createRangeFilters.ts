import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import { getInputElement } from 'utils/getInputElement';
import { useRangeFilter, defaultUseRangeFilter } from './useRangeFilter';
import { compareNumeric } from 'utils/helpersArray';
import { setQueries } from 'utils/queries';
import data from 'data/data.json';

export let price: number[] = [];
export let stock: number[] = [];

const products: ProductProperties[] = data.products;
products.forEach((product) => {
  price.push(product.price);
  stock.push(product.stock);
});

price = price.sort(compareNumeric);
stock = stock.sort(compareNumeric);

price.splice(1, price.length - 2);
stock.splice(1, stock.length - 2);

export function fillSlider(
  from: HTMLElement,
  to: HTMLElement,
  sliderColor: string,
  rangeColor: string,
  controlSlider: HTMLElement
): void {
  if (!(from instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (!(to instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  const rangeDistance: number = +to.max - +to.min;
  const fromPosition: number = +from.value - +to.min;
  const toPosition: number = +to.value - +to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
}

function getParsed(currentFrom: HTMLElement, currentTo: HTMLElement): number[] {
  if (!(currentFrom instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (!(currentTo instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

export function setToggleAccessible(currentTarget: HTMLElement, kind: string): void {
  const toRange = getHtmlElement(document, `#to${kind[0].toUpperCase() + kind.slice(1)}`);
  if (!(currentTarget instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (Number(currentTarget.value) <= 0) {
    toRange.style.zIndex = '2';
  } else {
    toRange.style.zIndex = '0';
  }
}

export function controlfromRange(
  fromRange: HTMLElement,
  toRange: HTMLElement,
  sliderColor: string,
  fromValue: HTMLElement,
  kind: ('price' | 'stock'),
  unit: string
): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  let innerValue: number;
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  if (!(fromRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  innerValue = Math.ceil(from);
  if (from > to) {
    fromRange.value = `${to}`;
    innerValue = Math.ceil(to);
  }
  fromValue.innerHTML = `${innerValue}${unit}`;
  useRangeFilter(kind, innerValue, 'from');
}

export function controltoRange(
  fromRange: HTMLElement,
  toRange: HTMLElement,
  sliderColor: string,
  toValue: HTMLElement,
  kind: ('price' | 'stock'),
  unit: string
): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  let innerValue: number;
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  setToggleAccessible(toRange, kind);
  if (!(toRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (from <= to) {
    toRange.value = `${to}`;
    innerValue = Math.ceil(to);
  } else {
    toRange.value = `${from}`;
    innerValue = Math.ceil(from);
  }
  toValue.innerHTML = `${innerValue}${unit}`;
  useRangeFilter(kind, innerValue, 'to');
}

export function createRangeFilters(kind: ('price' | 'stock')): void {
  const [unit, value, color] = kind === 'price' ? ['$', price, '#e0eff6'] : ['', stock, '#fff4e7'];
  const fromRange = getInputElement(document, `#from${kind[0].toUpperCase() + kind.slice(1)}`);
  const toRange = getInputElement(document, `#to${kind[0].toUpperCase() + kind.slice(1)}`);
  const fromRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__from-value`);
  const toRangeValue = getHtmlElement(document, `.home__filter-${kind} .filter-range__to-value`);

  fromRange.min = `${value[0]}`;
  fromRange.max = `${value[1]}`;
  fromRange.value = `${value[0]}`;

  toRange.min = `${value[0]}`;
  toRange.max = `${value[1]}`;
  toRange.value = `${value[1]}`;

  fromRangeValue.innerHTML = `${value[0] + unit}`;
  toRangeValue.innerHTML = `${value[1] + unit}`;

  defaultUseRangeFilter(kind, value[0], value[1]);
  fillSlider(fromRange, toRange, color, '#07484a', toRange);
  setToggleAccessible(toRange, kind);

  fromRange.oninput = () => {
    controlfromRange(fromRange, toRange, color, fromRangeValue, kind, unit);
    const [from, to]: number[] = getParsed(fromRange, toRange);
    setQueries({ name: kind, value: `${from}↕${to}` });
  };

  toRange.oninput = () => {
    controltoRange(fromRange, toRange, color, toRangeValue, kind, unit);
    const [from, to]: number[] = getParsed(fromRange, toRange);
    setQueries({ name: kind, value: `${from}↕${to}` });
  };
}
