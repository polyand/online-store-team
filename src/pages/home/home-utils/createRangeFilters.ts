import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import data from 'data/data.json';

const products: ProductProperties[] = data.products;
let price: number[] = [];
let stock: number[] = [];

products.forEach((product) => {
  price.push(product.price);
  stock.push(product.stock);
});

function compareNumeric(a: number, b: number): number {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
price = price.sort(compareNumeric);
stock = stock.sort(compareNumeric);

price.splice(1, price.length - 2);
stock.splice(1, stock.length - 2);

function fillSlider(
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

function controlfromRange(
  fromRange: HTMLElement,
  toRange: HTMLElement,
  sliderColor: string,
  fromValue: HTMLElement,
  type: number[],
  unit: string
): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  if (!(fromRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  fromValue.innerHTML = `${Math.ceil((from * type[1]) / 100) + type[0]}${unit}`;
  if (from > to) {
    fromRange.value = `${to}`;
    fromValue.innerHTML = `${Math.ceil((to * type[1]) / 100) + type[0]}${unit}`;
  }
}

function setToggleAccessible(currentTarget: HTMLElement, id: string): void {
  const toRange = getHtmlElement(document, `#${id}`);
  if (!(currentTarget instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (Number(currentTarget.value) <= 0) {
    toRange.style.zIndex = '2';
  } else {
    toRange.style.zIndex = '0';
  }
}

function controltoRange(
  fromRange: HTMLElement,
  toRange: HTMLElement,
  sliderColor: string,
  toValue: HTMLElement,
  id: string,
  type: number[],
  unit: string
): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  setToggleAccessible(toRange, id);
  if (!(toRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (from <= to) {
    toRange.value = `${to}`;
    toValue.innerHTML = `${Math.ceil((to * type[1]) / 100) + type[0]}${unit}`;
  } else {
    toRange.value = `${from}`;
    toValue.innerHTML = `${Math.ceil((from * type[1]) / 100) + type[0]}${unit}`;
  }
}

export function createRangeFilters() {
  const fromPrice = getHtmlElement(document, '#fromPrice');
  const toPrice = getHtmlElement(document, '#toPrice');
  const fromStock = getHtmlElement(document, '#fromStock');
  const toStock = getHtmlElement(document, '#toStock');
  const fromPriceValue = getHtmlElement(document, '.home__filter-price .filter-range__from-value');
  const toPriceValue = getHtmlElement(document, '.home__filter-price .filter-range__to-value');
  const fromStockValue = getHtmlElement(document, '.home__filter-stock .filter-range__from-value');
  const toStockValue = getHtmlElement(document, '.home__filter-stock .filter-range__to-value');
  fromPriceValue.innerHTML = `${price[0]}$`;
  toPriceValue.innerHTML = `${price[1]}$`;
  fromStockValue.innerHTML = `${stock[0]}`;
  toStockValue.innerHTML = `${stock[1]}`;

  fillSlider(fromPrice, toPrice, '#e0eff6', '#07484a', toPrice);
  setToggleAccessible(toPrice, 'toPrice');

  fillSlider(fromStock, toStock, '#fff4e7', '#07484a', toStock);
  setToggleAccessible(toStock, 'toStock');

  fromPrice.oninput = () => controlfromRange(fromPrice, toPrice, '#e0eff6', fromPriceValue, price, '$');
  toPrice.oninput = () => controltoRange(fromPrice, toPrice, '#e0eff6', toPriceValue, 'toPrice', price, '$');

  fromStock.oninput = () => controlfromRange(fromStock, toStock, '#fff4e7', fromStockValue, stock, '');
  toStock.oninput = () => controltoRange(fromStock, toStock, '#fff4e7', toStockValue, 'toStock', stock, '');
}
