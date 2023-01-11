export function getHtmlElement(parentNode: ParentNode, selector: string): HTMLElement {
  const elem = parentNode.querySelector(selector);
  if (!elem) {
    throw new Error('Must be an HTMLElement!');
  }
  if (!(elem instanceof HTMLElement)) {
    throw new Error('Must be an HTMLElement!');
  }
  return elem;
}
