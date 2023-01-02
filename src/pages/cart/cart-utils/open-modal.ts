import { getHtmlElement } from 'utils/getHtmlElement';

export function openModal(): void {
  const modal = getHtmlElement(document, '#modal');
  modal.classList.remove('modal-hide');
}
