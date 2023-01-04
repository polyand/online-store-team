import { getHtmlElement } from 'utils/getHtmlElement';

function getImageSrc(event: Event): void {
  const imageThumbnailElem = getHtmlElement(document, '.product__details-thumbnail');
  const target = event.target;
  if (target instanceof HTMLImageElement && imageThumbnailElem instanceof HTMLImageElement) {
    imageThumbnailElem.src = target.src;
  }
}

export function changeImage() {
  const image1Elem = getHtmlElement(document, '.product__details-image1');
  const image2Elem = getHtmlElement(document, '.product__details-image2');
  const image3Elem = getHtmlElement(document, '.product__details-image3');
  image1Elem.addEventListener('click', getImageSrc);
  image2Elem.addEventListener('click', getImageSrc);
  image3Elem.addEventListener('click', getImageSrc);
}
