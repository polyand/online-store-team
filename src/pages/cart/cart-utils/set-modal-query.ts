import { setQueries } from 'utils/queries';

export function setModalQuery(): void {
  setQueries({ name: 'modal', value: 'true' });
}
