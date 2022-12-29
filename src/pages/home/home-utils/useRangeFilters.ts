import { getHtmlElement } from 'utils/getHtmlElement';

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

function controlfromRange(fromRange: HTMLElement, toRange: HTMLElement, sliderColor: string): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  if (!(fromRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (from > to) {
    fromRange.value = `${to}`;
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

function controltoRange(fromRange: HTMLElement, toRange: HTMLElement, sliderColor: string): void {
  const [from, to]: number[] = getParsed(fromRange, toRange);
  fillSlider(fromRange, toRange, sliderColor, '#07484a', toRange);
  setToggleAccessible(toRange, `${toRange}`);
  if (!(toRange instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  if (from <= to) {
    toRange.value = `${to}`;
  } else {
    toRange.value = `${from}`;
  }
}

export function useRangeFilters() {
  const fromPrice = getHtmlElement(document, '#fromPrice');
  const toPrice = getHtmlElement(document, '#toPrice');
  const fromStock = getHtmlElement(document, '#fromStock');
  const toStock = getHtmlElement(document, '#toStock');

  fillSlider(fromPrice, toPrice, '#e0eff6', '#07484a', toPrice);
  setToggleAccessible(toPrice, 'toPrice');

  fillSlider(fromStock, toStock, '#fff4e7', '#07484a', toStock);
  setToggleAccessible(toStock, 'toStock');

  fromPrice.oninput = () => controlfromRange(fromPrice, toPrice, '#e0eff6');
  toPrice.oninput = () => controltoRange(fromPrice, toPrice, '#e0eff6');

  fromStock.oninput = () => controlfromRange(fromStock, toStock, '#fff4e7');
  toStock.oninput = () => controltoRange(fromStock, toStock, '#fff4e7');
}
