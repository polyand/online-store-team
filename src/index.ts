import { appendPage, router } from 'utils/router';
import './index.scss';

window.addEventListener('click', router);
window.addEventListener('popstate', appendPage);
document.addEventListener('DOMContentLoaded', appendPage);
