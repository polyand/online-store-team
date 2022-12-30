// import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import { filters, createFiltredCollection } from 'utils/filtredProducts';
import { containsElement, addElement, removeElement } from 'utils/helpersArray';
// import data from 'data/data.json';

// const products: ProductProperties[] = data.products;

export function useCheckboxFilter(kind1: string) {
  const checkListArea = getHtmlElement(document, `.home__filter-${kind1}`);
  const checkList: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    `.home__filter-${kind1} .filter-checkbox__input`
  );
  if (!checkList) {
    throw new Error('Must be an HTMLElement!');
  }
  checkList.forEach((checkbox: Element) => {
    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });

  checkListArea.addEventListener('click', (event) => {
    checkList.forEach((checkbox) => {
      if (event.target === checkbox) {
        if (checkbox.checked && !containsElement<string>(filters[kind1], checkbox.id)) {
          addElement<string>(filters[kind1], checkbox.id);
        }
        if (!checkbox.checked && containsElement<string>(filters[kind1], checkbox.id)) {
          removeElement<string>(filters[kind1], checkbox.id);
        }
      }
    });
    createFiltredCollection();
  });
}
