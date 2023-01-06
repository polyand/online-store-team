import { filters, createFiltredCollection } from './filtredProducts';
import { getHtmlElement } from 'utils/getHtmlElement';
import { getInputElement } from 'utils/getInputElement';
import { correctionRangeValue } from './useRangeFilter';
import { deleteQueries } from 'utils/queries';

export function searchProducts() {
  const searchWrapper = getHtmlElement(document, '.search');
  const searchButton = getHtmlElement(document, '.search__button');
  const searchInput = getInputElement(document, '.search__input');

  // Focus. Increase field input
  searchInput.addEventListener('focus', () => {
    searchWrapper.style.width = '100%';
  });

  // Input & Blur. Change logo button and Reduse field input
  searchInput.addEventListener('input', () => {
    searchButton.style.backgroundImage = `url('../../assets/img/logo_x.svg')`;
    searchButton.style.cursor = 'pointer';
    if (searchInput.value == '') {
      searchButton.style.backgroundImage = `url('../../assets/img/logo_search.svg')`;
      searchButton.style.cursor = 'auto';
    }
    document.addEventListener('click', (event) => {
      if (event.target === searchButton) {
        searchInput.value = '';
        filters.text = [searchInput.value];
        deleteQueries({ name: 'search' });
        createFiltredCollection();
        correctionRangeValue('price');
        correctionRangeValue('stock');
        searchButton.style.backgroundImage = `url('../../assets/img/logo_search.svg')`;
        searchButton.style.cursor = 'auto';
        searchInput.focus();
      } else {
        if (event.target !== searchInput) {
          searchInput.blur();
          if (screen.width > 1030) {
            searchWrapper.style.width = '220px';
          }
        }
      }
    });
  });

  // Blur. Reduse field input
  document.addEventListener('click', (event) => {
    if (event.target !== searchInput) {
      searchInput.blur();
      if (screen.width > 1030) {
        searchWrapper.style.width = '220px';
      }
    }
  });
}
