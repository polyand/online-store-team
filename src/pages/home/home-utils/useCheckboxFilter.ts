import { getHtmlElement } from 'utils/getHtmlElement';
import { filters, createFiltredCollection } from './filtredProducts';
import { containsElement, addElement, removeElement } from 'utils/helpersArray';
import { correctionRangeValue } from './useRangeFilter';
import { setQueries, deleteQueries } from 'utils/queries';

export function useCheckboxFilter(kind: string): void {
  const checkListArea = getHtmlElement(document, `.home__filter-${kind}`);
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

  checkListArea.addEventListener('click', (event) => {
    checkList.forEach((checkbox) => {
      if (event.target === checkbox) {
        if (checkbox.checked && !containsElement<string>(filters[kind], checkbox.id)) {
          addElement<string>(filters[kind], checkbox.id);
          setQueries({ name: kind, value: checkbox.id });
        }
        if (!checkbox.checked && containsElement<string>(filters[kind], checkbox.id)) {
          removeElement<string>(filters[kind], checkbox.id);
          deleteQueries({ name: kind, value: checkbox.id });
        }
      }
    });
    createFiltredCollection();
    correctionRangeValue('price');
    correctionRangeValue('stock');
  });
}
