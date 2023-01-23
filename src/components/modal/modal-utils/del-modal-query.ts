import { setQueriesModal } from 'utils/queriesModal';

export function delModalQuery(event: Event) {
  const target = event.target;
  if (target instanceof HTMLElement) {
    if (target.id === 'modal') {
      setQueriesModal({ name: 'modal' });
    }
  }
}
