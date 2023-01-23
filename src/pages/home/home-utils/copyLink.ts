import { getHtmlElement } from 'utils/getHtmlElement';

function copy(link: string) {
  const tmp = document.createElement('input');
  getHtmlElement(document, 'body').appendChild(tmp);
  tmp.value = link;
  tmp.select();
  document.execCommand('copy');
  tmp.remove();
}

export function copyLink() {
  const copyLinkButton = getHtmlElement(document, '.home__btn-link');
  copyLinkButton.addEventListener('click', () => {
    const link: string = new URL(window.location.href).href;
    copy(link);
    copyLinkButton.innerHTML = 'Copied!';
    copyLinkButton.classList.add('home__btn-link_copied');
    setTimeout(() => {
      copyLinkButton.innerHTML = 'Copy Link';
      copyLinkButton.classList.remove('home__btn-link_copied');
    }, 500);
  });
}
