import { appendPage } from 'utils/router';
import { addElement } from 'utils/addElement';
import { header } from 'components/header';
import { footer } from 'components/footer';
import { headerActions } from 'components/header/header';
import { modal } from 'components/modal';
import { modalActions } from 'components/modal/modal';
import { toggleModal } from 'components/modal/modal-utils/toggle-modal';
import { queriesHome } from 'pages/home/home-utils/queriesHome';
import './index.scss';
export function onLoadFunctions(): void {
  appendPage();
  headerActions();
  modalActions();
  queriesHome();
  toggleModal();
}

function onPopstateFunctions(): void {
  toggleModal();
  queriesHome();
}

//window.addEventListener('click', router);
window.addEventListener('popstate', onPopstateFunctions);
document.addEventListener('DOMContentLoaded', onLoadFunctions);

const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
const modalElement = document.querySelector('#modal');
addElement(headerElement, header);
addElement(footerElement, footer);
addElement(modalElement, modal);
