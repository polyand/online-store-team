import { createHtmlElement } from 'utils/createHtml';
import footerHTML from './footer.html';
import './footer.scss';

export const footer = (() => {
  return createHtmlElement(footerHTML);
})();

document.addEventListener('DOMContentLoaded', () => {
  const logoRsschol = document.querySelector<HTMLElement>('.footer__logo-rss');
  if (logoRsschol === null) {
    throw new Error();
  }
  logoRsschol.addEventListener('mouseover', () => {
    logoRsschol.classList.add('footer__logo-rss_hover');
  });
  logoRsschol.addEventListener('mouseout', () => {
    logoRsschol.classList.remove('footer__logo-rss_hover');
  });
  logoRsschol.addEventListener('click', () => {
    window.location.href = 'https://rs.school/js/';
  });

  const logoGithubPolyandImg = document.querySelector<HTMLElement>('#polyand .logo-github__img');
  const logoGithubPolyandTitle = document.querySelector<HTMLElement>('#polyand .logo-github__title');
  if (logoGithubPolyandImg !== null && logoGithubPolyandTitle !== null) {
    logoGithubPolyandImg.addEventListener('mouseover', () => {
      logoGithubPolyandImg.classList.add('logo-github__img_hover');
      logoGithubPolyandTitle.classList.add('logo-github__title_hover');
    });
    logoGithubPolyandImg.addEventListener('mouseout', () => {
      logoGithubPolyandImg.classList.remove('logo-github__img_hover');
      logoGithubPolyandTitle.classList.remove('logo-github__title_hover');
    });
    logoGithubPolyandImg.addEventListener('click', () => {
      window.location.href = 'https://github.com/polyand';
    });
    logoGithubPolyandTitle.addEventListener('mouseover', () => {
      logoGithubPolyandImg.classList.add('logo-github__img_hover');
      logoGithubPolyandTitle.classList.add('logo-github__title_hover');
    });
    logoGithubPolyandTitle.addEventListener('mouseout', () => {
      logoGithubPolyandImg.classList.remove('logo-github__img_hover');
      logoGithubPolyandTitle.classList.remove('logo-github__title_hover');
    });
    logoGithubPolyandTitle.addEventListener('click', () => {
      window.location.href = 'https://github.com/polyand';
    });
  }

  const logoGithubAleksandrYermolaevImg = document.querySelector<HTMLElement>('#AleksandrYermolaev .logo-github__img');
  const logoGithubAleksandrYermolaevTitle = document.querySelector<HTMLElement>(
    '#AleksandrYermolaev .logo-github__title'
  );
  if (logoGithubAleksandrYermolaevImg !== null && logoGithubAleksandrYermolaevTitle !== null) {
    logoGithubAleksandrYermolaevImg.addEventListener('mouseover', () => {
      logoGithubAleksandrYermolaevImg.classList.add('logo-github__img_hover');
      logoGithubAleksandrYermolaevTitle.classList.add('logo-github__title_hover');
    });
    logoGithubAleksandrYermolaevImg.addEventListener('mouseout', () => {
      logoGithubAleksandrYermolaevImg.classList.remove('logo-github__img_hover');
      logoGithubAleksandrYermolaevTitle.classList.remove('logo-github__title_hover');
    });
    logoGithubAleksandrYermolaevImg.addEventListener('click', () => {
      window.location.href = 'https://github.com/AleksandrYermolaev';
    });
    logoGithubAleksandrYermolaevTitle.addEventListener('mouseover', () => {
      logoGithubAleksandrYermolaevImg.classList.add('logo-github__img_hover');
      logoGithubAleksandrYermolaevTitle.classList.add('logo-github__title_hover');
    });
    logoGithubAleksandrYermolaevTitle.addEventListener('mouseout', () => {
      logoGithubAleksandrYermolaevImg.classList.remove('logo-github__img_hover');
      logoGithubAleksandrYermolaevTitle.classList.remove('logo-github__title_hover');
    });
    logoGithubAleksandrYermolaevTitle.addEventListener('click', () => {
      window.location.href = 'https://github.com/AleksandrYermolaev';
    });
  }
});
