import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import data from 'data/data.json';

export function createCheckboxFilter(kind: string) {
  const collection: { [key: string]: number } = {};

  // Create collection of properties
  data.products.forEach((element: ProductProperties) => {
    if (Object.prototype.hasOwnProperty.call(collection, element[kind])) {
      collection[element[kind]] = collection[element[kind]] + 1;
    } else {
      collection[element[kind]] = 1;
    }
  });

  // Create DOM elements
  for (const key in collection) {
    const item = document.createElement('div');
    item.classList.add('filter-checkbox__item');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('filter-checkbox__input');
    const label = document.createElement('label');
    label.classList.add('filter-checkbox__lebel');
    label.textContent = key;
    const div = document.createElement('div');
    div.classList.add('filter-checkbox__quantity', 'product-quantity');
    const quantityChoose = document.createElement('span');
    quantityChoose.classList.add('product-quantity__choose');
    quantityChoose.innerHTML = `(${collection[key]}`;
    const quantityTotal = document.createElement('span');
    quantityTotal.classList.add('product-quantity__total');
    quantityTotal.innerHTML = `/${collection[key]})`;
    div.append(quantityChoose);
    div.append(quantityTotal);
    item.append(input);
    item.append(label);
    item.append(div);
    const filterList = getHtmlElement(document, `.home__filter-${kind} .filter-checkbox__item-list`);
    filterList.append(item);
  }
}
