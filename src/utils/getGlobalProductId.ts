export function getGlobalProductId(): number | undefined {
  const path = window.location.pathname;
  if (path.includes('products')) {
    const pathArr = path.split('/');
    if (!isNaN(+pathArr[2])) {
      return +pathArr[2];
    }
  }
}
