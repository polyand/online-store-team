import { containsElement, removeElement } from './helpersArray';

export const getQuery = (name: string): string | null => {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
};

export const setQueries = (query: { name: string; value?: string }): void => {
  const url = new URL(window.location.href);
  if (!query.value) {
    url.searchParams.delete(query.name);
    return;
  }
  const extantValue: string | null = getQuery(query.name);
  if ((query.name === 'category' || query.name === 'type') && extantValue !== null) {
    url.searchParams.set(query.name, `${extantValue}↕${query.value}`);
  } else {
    url.searchParams.set(query.name, query.value);
  }
  window.history.pushState(null, '', url);
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
};

export const deleteAllQueries = (): void => {
  if (window.location.search) {
    const url = new URL(window.location.href);
    window.history.pushState(null, '', url.origin);
  }
};

export const getAllQueries = () => {
  const initValue: {
    [key: string]: string;
  } = {};
  const urlParamsString = new URLSearchParams(window.location.search).toString();
  const urlQueryList = urlParamsString.split('&');
  const params = urlQueryList.reduce((accumulator, param) => {
    if (param) {
      const [key, val] = param.split('=');
      accumulator[key] = decodeURIComponent(val);
    }
    return accumulator;
  }, initValue);
  return params;
};
