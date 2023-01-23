import { getHtmlCollection } from 'utils/getHtmlCollection';

export function jumpProductPage(): void {
  const productItems = getHtmlCollection(document, '.home__product-item');
  productItems.forEach((productItem: Element) => {
    productItem.addEventListener('click', function (this: HTMLElement, event) {
      if (
        this === productItem &&
        event.target instanceof HTMLElement &&
        !event.target.classList.contains('product-footer-info__btn-buy')
      ) {
        window.location.href = `${window.location.origin}/products/${this.id}`;
      }
    });
  });
}
