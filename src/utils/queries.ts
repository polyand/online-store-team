import { containsElement, addElement, removeElement } from './helpersArray';

export const getQuery = (name: string): string | null => {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
};

export const setQueries = (query: { name: string; value?: string }): void => {
  const url = new URL(window.location.href);
  if (!query.value) {
    // TODO Delete this peace of code
    url.searchParams.delete(query.name); // TODO Delete this peace of code
  } else {
    // TODO Delete this peace of code
    const extantValue: string | null = getQuery(query.name);
    if (extantValue !== null) {
      url.searchParams.set(query.name, `${extantValue}↕${query.value}`);
    } else {
      url.searchParams.set(query.name, query.value);
    }
  }
  window.history.pushState(null, '', url);
  // window.dispatchEvent(new Event('popstate'));
};

export const deleteQueries = (query: { name: string; value?: string }): void => {
  const url = new URL(window.location.href);
  if (!query.value) {
    url.searchParams.delete(query.name);
  } else {
    const extantValue: string | null = getQuery(query.name);
    if (extantValue !== null) {
      const extantValueList = extantValue.split('↕');
      if (containsElement(extantValueList, query.value)) {
        removeElement(extantValueList, query.value);
      }
      if (extantValueList.length < 1) {
        url.searchParams.delete(query.name);
      } else {
        url.searchParams.set(query.name, `${extantValueList.join('↕')}`);
      }
    }
  }
  window.history.pushState(null, '', url);
  // window.dispatchEvent(new Event('popstate'));
};

export const deleteAllQueries = (): void => {
  if (window.location.search) {
    // condition to not add empty history
    const url = new URL(window.location.href);
    // url.search = ''; // bad because not show in history
    // window.history.pushState(null, '', url);
    window.history.pushState(null, '', url.origin);
    window.dispatchEvent(new Event('popstate'));
  }
};

export const getAllQueries = () => {
  const urlParamsString = new URLSearchParams(window.location.search).toString();
  const urlQueryList = urlParamsString.split('&');
  const params = urlQueryList.reduce((accumulator, param) => {
    if (param) {
      const [key, val] = param.split('=');
      accumulator[key] = decodeURIComponent(val);
    }
    return accumulator;
  }, {});

  return params;
};
