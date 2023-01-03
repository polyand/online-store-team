export const getQuery = (name: string): string | null => {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
};

export const setQueries = (query: { name: string; value?: string }): void => {
  const url = new URL(window.location.href);
  if (!query.value) {
    url.searchParams.delete(query.name);
  } else {
    url.searchParams.set(query.name, query.value);
  }
  window.history.pushState(null, '', url);
  window.dispatchEvent(new Event('popstate'));
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
