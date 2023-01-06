import { getHtmlElement } from 'utils/getHtmlElement';
import { useSortProducts } from './useSortProducts';
import { setQueries } from 'utils/queries';

export function sortProducts(): void {
  const sortButton = getHtmlElement(document, '.sort__button');
  const sortList = getHtmlElement(document, '.sort__list');
  const sortItems = document.querySelectorAll('.sort__item');

  if (!sortItems) {
    throw new Error('Must be an HTMLElement!');
  }
  sortItems.forEach((listItem: Element) => {
    if (!(listItem instanceof HTMLElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });

  // Click button. Open/Close select menu
  sortButton.addEventListener('click', () => {
    sortItems.forEach((listItem: Element, index: number) => {
      if (!(listItem instanceof HTMLElement)) {
        throw new Error('Must be an HTMLElement!');
      }
      if (sortButton.innerText == listItem.innerText && index !== 0) {
        listItem.classList.add('sort__item_choose');
      }
    });
    sortList.classList.toggle('sort__list_invisible');
    sortButton.classList.add('sort__button_active');
  });

  // Mousemove items. Remove item`s choose style
  sortList.addEventListener('mousemove', (event) => {
    if (event.target !== sortList[0]) {
      sortItems.forEach((listItem: Element) => {
        listItem.classList.remove('sort__item_choose');
      });
    }
  });

  // Click item. Choose item
  sortItems.forEach((listItem, index) => {
    listItem.addEventListener('click', function (this: HTMLDivElement, event) {
      if (index !== 0) {
        event.stopImmediatePropagation();
        sortButton.textContent = this.innerText;
        sortButton.focus();
        sortList.classList.add('sort__list_invisible');
        useSortProducts();
        setQueries({ name: 'sort', value: this.innerText });
      }
    });
  });

  // Click outside select menu. Close menu
  document.addEventListener('click', (event) => {
    if (event.target !== sortButton) {
      sortList.classList.add('sort__list_invisible');
      sortButton.classList.remove('sort__button_active');
    }
  });

  // Keydown Tab or Escape. Close menu
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      sortList.classList.add('sort__list_invisible');
      sortButton.classList.remove('sort__button_active');
    }
  });
}
