import { getHtmlElement } from 'utils/getHtmlElement';

export function toggleModal(): void {
  const queryParams = new URLSearchParams(window.location.search);
  const modal = getHtmlElement(document, '#modal');
  if (queryParams.has('modal')) {
    modal.classList.remove('modal-hide');
  } else {
    modal.classList.add('modal-hide');
  }
}
