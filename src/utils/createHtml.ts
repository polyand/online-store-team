export const createHtmlElement = (htmlString: string): Element | null => {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content.firstElementChild;
};
