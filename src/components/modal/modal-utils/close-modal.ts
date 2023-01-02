import { getHtmlElement } from 'utils/getHtmlElement';

export function closeModal(event: Event) {
  const target = event.target;
  console.log(target);
  if (target instanceof HTMLElement) {
    if (target.id === 'modal') {
      const modal = getHtmlElement(document, '#modal');
      modal.className = 'modal-hide';
    }
  }
}
