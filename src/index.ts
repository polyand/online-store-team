import { appendPage } from 'utils/router';
import { addElement } from 'utils/addElement';
import { header } from 'components/header';
import { footer } from 'components/footer';
import { homeActions } from 'pages/home/home';
import { cartActions } from 'pages/cart/cart';
import { headerActions } from 'components/header/header';
import './index.scss';

function onLoadFunctions() {
  appendPage();
  cartActions();
  headerActions();
  homeActions();
}

//window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', onLoadFunctions);

const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
addElement(headerElement, header);
addElement(footerElement, footer);
