import { createHtmlElement } from 'utils/createHtml';
import { getHtmlElement } from 'utils/getHtmlElement';
import { delModalQuery } from './modal-utils/del-modal-query';
import { displayCard } from './modal-utils/display-card';
import { showMsgByClick, showWarningMsg } from './modal-utils/show-warning-msg';
import modalHTML from './modal.html';
import './modal.scss';

export const modal = (() => {
  return createHtmlElement(modalHTML);
})();

export function modalActions() {
  const form = getHtmlElement(document, '.modal__form');
  const cardBlock = getHtmlElement(document, '.credit-card__body');
  const submit = getHtmlElement(document, '.modal__form-submit');
  const modalWrapper = getHtmlElement(document, '#modal');
  form.addEventListener('focusout', showWarningMsg);
  cardBlock.addEventListener('input', displayCard);
  submit.addEventListener('click', showMsgByClick);
  modalWrapper.addEventListener('click', delModalQuery);
}
