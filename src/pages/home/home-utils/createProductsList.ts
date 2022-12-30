import { ProductProperties } from 'utils/types';
import { getHtmlElement } from 'utils/getHtmlElement';
import data from 'data/data.json';

const products: ProductProperties[] = data.products;

export function createProductsList() {
  const productsList = getHtmlElement(document, '.home__products-list');

  products.forEach((product) => {
    const item = document.createElement('div');
    item.classList.add('home__product-item', 'product-item', 'product-item_block');
    item.id = `${product.id}`;

    const headerInfo = document.createElement('div');
    headerInfo.classList.add('product-item__info', 'product-header-info');

    const itemTitle = document.createElement('div');
    itemTitle.classList.add('product-header-info__title');
    itemTitle.innerHTML = `${product.title}`;

    const itemType = document.createElement('div');
    itemType.classList.add('product-header-info__type');
    itemType.innerHTML = `${product.type}`;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('product-header-info__price');
    itemPrice.innerHTML = `${product.price}$`;

    headerInfo.append(itemTitle);
    headerInfo.append(itemType);
    headerInfo.append(itemPrice);

    const listInfo = document.createElement('div');
    listInfo.classList.add('product-item__info', 'list-info', 'invisible');

    const discount = document.createElement('div');
    discount.classList.add('list-info__discount');

    const category = document.createElement('div');
    category.classList.add('list-info__category');

    const discription = document.createElement('div');
    discription.classList.add('list-info__description');

    const listInfoDiscountTitle = document.createElement('span');
    listInfoDiscountTitle.classList.add('list-info__title');

    const listInfoDiscountValue = document.createElement('span');
    listInfoDiscountValue.classList.add('list-info__value');

    listInfoDiscountTitle.innerHTML = 'Discount: ';
    listInfoDiscountValue.innerHTML = `${product.discountPercentage}%`;

    discount.append(listInfoDiscountTitle);
    discount.append(listInfoDiscountValue);

    const listInfoCategoryTitle = document.createElement('span');
    listInfoCategoryTitle.classList.add('list-info__title');

    const listInfoCategoryValue = document.createElement('span');
    listInfoCategoryValue.classList.add('list-info__value');

    listInfoCategoryTitle.innerHTML = 'Category: ';
    listInfoCategoryValue.innerHTML = `${product.category}`;

    category.append(listInfoCategoryTitle);
    category.append(listInfoCategoryValue);

    const listInfoDescriptionTitle = document.createElement('span');
    listInfoDescriptionTitle.classList.add('list-info__title');

    const listInfoDescriptionValue = document.createElement('span');
    listInfoDescriptionValue.classList.add('list-info__value');

    listInfoDescriptionTitle.innerHTML = 'Description: ';
    listInfoDescriptionValue.innerHTML = `${product.description}`;

    discription.append(listInfoDescriptionTitle);
    discription.append(listInfoDescriptionValue);

    listInfo.append(discount);
    listInfo.append(category);
    listInfo.append(discription);

    const itemImg = document.createElement('div');
    itemImg.classList.add('product-item__img', 'product-item__img_block');
    itemImg.style.backgroundImage = `url('${product.thumbnail}')`;

    const footerInfo = document.createElement('div');
    footerInfo.classList.add('product-item__info', 'product-footer-info', 'product-footer-info_block');

    const ratingTitle = document.createElement('div');
    ratingTitle.classList.add('product-footer-info__rating-title');
    const productRating = Number.isInteger(product.rating) ? `${product.rating}.0` : `${product.rating}`;
    ratingTitle.innerHTML = productRating;

    const ratingStars = document.createElement('div');
    ratingStars.classList.add('product-footer-info__rating-stars');
    ratingStars.style.setProperty('--rating', `${product.rating}`);

    const btnBuyNow = document.createElement('button');
    btnBuyNow.classList.add('product-footer-info__btn-buy', 'product-footer-info__btn-buy_add');
    btnBuyNow.id = `btn_${product.id}`;
    btnBuyNow.innerHTML = 'Add to cart';

    footerInfo.append(ratingTitle);
    footerInfo.append(ratingStars);
    footerInfo.append(btnBuyNow);

    item.append(headerInfo);
    item.append(itemImg);
    item.append(listInfo);
    item.append(footerInfo);

    productsList.append(item);
  });
}
