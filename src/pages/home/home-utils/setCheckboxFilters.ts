import { filters } from './filtredProducts';
import { addElement } from 'utils/helpersArray';

export function setCheckboxFilters(kind: string, queryParams: string[] | string): void {
  const checkList: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    `.home__filter-${kind} .filter-checkbox__input`
  );
  if (!checkList) {
    throw new Error('Must be an HTMLElement!');
  }
  checkList.forEach((checkbox: Element) => {
    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });
  checkList.forEach((checkbox) => {
    checkbox.checked = false;
    if (Array.isArray(queryParams)) {
      queryParams.forEach((param) => {
        if (param === checkbox.id) {
          checkbox.checked = true;
          addElement<string>(filters[kind], checkbox.id);
        }
      });
    }
  });
}
