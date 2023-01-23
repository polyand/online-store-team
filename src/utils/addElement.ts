export const addElement = (element: Element | null, insert: Element | null): void => {
  if (element === null) {
    throw new Error();
  }
  if (insert) {
    if (insert instanceof Node) {
      element.innerHTML = '';
      element.appendChild(insert);
    }
  }
};
