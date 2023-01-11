export function getHtmlCollection(parentNode: ParentNode, selector: string): NodeListOf<Element> {
  const collection = parentNode.querySelectorAll(selector);
  if (!collection) {
    throw new Error('Must be an NodeList!');
  }
  collection.forEach((elem: Element) => {
    if (!(elem instanceof HTMLElement)) {
      throw new Error('Must be an HTMLElement!');
    }
  });
  return collection;
}
