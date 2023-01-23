export const setQueriesModal = (query: { name: string; value?: string }): void => {
  const url = new URL(window.location.href);
  if (!query.value) {
    url.searchParams.delete(query.name);
  } else {
    url.searchParams.set(query.name, query.value);
  }
  window.history.pushState(null, '', url);
  window.dispatchEvent(new Event('popstate'));
};
