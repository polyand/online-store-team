import { appendPage } from 'utils/router';
import { addElement } from 'utils/addElement';
import { header } from 'components/header';
import { footer } from 'components/footer';
import { headerActions } from 'components/header/header';
// import { homeActions } from 'pages/home/home';
// import { cartActions } from 'pages/cart/cart';
import './index.scss';
import { modal } from 'components/modal';

function onLoadFunctions() {
  appendPage();
  headerActions();
  // cartActions();
  // homeActions();
}

//window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', onLoadFunctions);

const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
const modalElement = document.querySelector('#modal');
addElement(headerElement, header);
addElement(footerElement, footer);
addElement(modalElement, modal);
