import { setQueriesModal } from 'utils/queriesModal';

export function setModalQuery(): void {
  setQueriesModal({ name: 'modal', value: 'true' });
}
