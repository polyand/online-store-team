export function jumpProductPage(): void {
  const productItems = document.querySelectorAll('.home__product-item');
  if (!productItems) {
    throw new Error('Must be an HTMLElement!');
  }
  productItems.forEach((productItem: Element) => {
    if (!(productItem instanceof HTMLElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });
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
