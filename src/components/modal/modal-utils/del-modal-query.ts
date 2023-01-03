import { setQueries } from 'utils/queries';

export function delModalQuery(event: Event) {
  const target = event.target;
  if (target instanceof HTMLElement) {
    if (target.id === 'modal') {
      setQueries({ name: 'modal' });
    }
  }
}
