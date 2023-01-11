import { getAllQueries } from 'utils/queries';
import { setFilters } from './setFilters';

const queryParams: string[] = ['category', 'price', 'search', 'sort', 'stock', 'type', 'view'];

export function queriesHome(): void {
  if (document.querySelector('.home') === null) {
    return;
  }
  const extantQueries: { [key: string]: string | string[] } = getAllQueries();
  if (queryParams.some((param) => param in extantQueries)) {
    for (const key in extantQueries) {
      extantQueries[key] = extantQueries[key].toString().replace(/\+/g, ' ').split('↕');
    }
  }
  queryParams.forEach((param) => {
    if (!(param in extantQueries)) {
      extantQueries[param] = [];
    }
  });
  setFilters(extantQueries);
}
