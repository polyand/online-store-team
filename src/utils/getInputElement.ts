export function getInputElement(parentNode: ParentNode, selector: string): HTMLInputElement {
  const elem = parentNode.querySelector(selector);
  if (!elem) {
    throw new Error('Must be an HTMLElement!');
  }
  if (!(elem instanceof HTMLInputElement)) {
    throw new Error('Must be an HTMLInputElement!');
  }
  return elem;
}
