import { getHtmlElement } from 'utils/getHtmlElement';
import { getHtmlCollection } from 'utils/getHtmlCollection';
import { productsFiltredList } from './createProductsList';

export function correctionCheckboxItemQuantity(kind: 'category' | 'type'): void {
  const checkboxList = getHtmlCollection(document, `.home__filter-${kind} .filter-checkbox__item`);

  checkboxList.forEach((checkbox) => {
    let counter = 0;
    const number = getHtmlElement(checkbox, '.product-quantity__choose');

    if (productsFiltredList.length === 0) {
      number.innerHTML = `(${counter}`;
      if (!checkbox.classList.contains('filter-checkbox__item_filtred')) {
        checkbox.classList.add('filter-checkbox__item_filtred');
      }
    }

    productsFiltredList.forEach((product) => {
      if (product[kind] === checkbox.children[0].id) {
        counter++;
      }
      number.innerHTML = `(${counter}`;
      if (counter === 0 && !checkbox.classList.contains('filter-checkbox__item_filtred')) {
        checkbox.classList.add('filter-checkbox__item_filtred');
      }
      if (counter !== 0 && checkbox.classList.contains('filter-checkbox__item_filtred')) {
        checkbox.classList.remove('filter-checkbox__item_filtred');
      }
    });
  });
}
