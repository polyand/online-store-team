import { deleteAllQueries } from 'utils/queries';
import { getHtmlElement } from 'utils/getHtmlElement';

export function resetFilters() {
  const resetFiltersButton = getHtmlElement(document, '.home__btn-reset');

  resetFiltersButton.addEventListener('click', () => {
    deleteAllQueries();
  });
}
