import { deleteAllQueries } from 'utils/queries';
import { getHtmlElement } from 'utils/getHtmlElement';
import { queriesHome } from './queriesHome';

export function resetFilters() {
  const resetFiltersButton = getHtmlElement(document, '.home__btn-reset');

  resetFiltersButton.addEventListener('click', () => {
    deleteAllQueries();
    queriesHome();
  });
}
