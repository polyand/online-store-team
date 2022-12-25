import { appendPage, router } from 'utils/router';
import { addElement } from 'utils/addElement';
import { header } from 'components/header';
import { footer } from 'components/footer';
import './index.scss';

window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', appendPage);

const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
addElement(headerElement, header);
addElement(footerElement, footer);
