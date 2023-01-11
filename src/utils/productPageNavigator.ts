function jumpProductPage(productId: number): void {
  window.location.href = `${window.location.origin}/products/${productId}`;
}

export function productPageNavigator(listenElem: HTMLElement, productId: number): void {
  listenElem.addEventListener('click', () => {
    jumpProductPage(productId);
  });
}
