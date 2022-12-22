import { appendPage, router } from 'utils/router';
import { header } from 'components/header';
import './index.scss';

window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', appendPage);
const headerElement = document.querySelector('.header');
if (headerElement === null) {
  throw new Error();
}
if (header) {
  if (header instanceof Node) {
    console.log(header);
    headerElement.innerHTML = '';
    headerElement.appendChild(header);
  }
}
