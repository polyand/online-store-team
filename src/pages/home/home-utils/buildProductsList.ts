import { productsFiltredList } from './createProductsList';
import { getHtmlElement } from 'utils/getHtmlElement';
import { correctionCheckboxItemQuantity } from './correctionCheckboxItemQuantity';
import { addRemoveProduct } from './addRemoveProduct';
import { jumpProductPage } from './jumpProductPage';
import { inCart } from 'utils/saveCart';

export function buildProductsList() {
  const productsList = getHtmlElement(document, '.home__products-list');
  productsList.innerHTML = '';

  productsFiltredList.forEach((product) => {
    const item = document.createElement('div');
    if (productsList.classList.contains('home__products-list_block')) {
      item.classList.add('home__product-item', 'product-item', 'product-item_block');
    } else {
      item.classList.add('home__product-item', 'product-item', 'product-item_list');
    }
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
    if (productsList.classList.contains('home__products-list_block')) {
      listInfo.classList.add('product-item__info', 'list-info', 'invisible');
    } else {
      listInfo.classList.add('product-item__info', 'list-info');
    }

    const stock = document.createElement('div');
    stock.classList.add('list-info__stock');

    const discount = document.createElement('div');
    discount.classList.add('list-info__discount');

    const category = document.createElement('div');
    category.classList.add('list-info__category');

    const discription = document.createElement('div');
    discription.classList.add('list-info__description');

    const listInfoStockTitle = document.createElement('span');
    listInfoStockTitle.classList.add('list-info__title');

    const listInfoStockValue = document.createElement('span');
    listInfoStockValue.classList.add('list-info__value');

    listInfoStockTitle.innerHTML = 'Stock: ';
    listInfoStockValue.innerHTML = `${product.stock}`;

    stock.append(listInfoStockTitle);
    stock.append(listInfoStockValue);

    const listInfoDiscountTitle = document.createElement('span');
    listInfoDiscountTitle.classList.add('list-info__title');

    const listInfoDiscountValue = document.createElement('span');
    listInfoDiscountValue.classList.add('list-info__value');

    listInfoDiscountTitle.innerHTML = 'Discount: ';
    listInfoDiscountValue.innerHTML = `${product.discount}%`;

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

    listInfo.append(stock);
    listInfo.append(discount);
    listInfo.append(category);
    listInfo.append(discription);

    const itemImg = document.createElement('div');
    if (productsList.classList.contains('home__products-list_block')) {
      itemImg.classList.add('product-item__img', 'product-item__img_block');
    } else {
      itemImg.classList.add('product-item__img', 'product-item__img_list');
    }
    itemImg.style.backgroundImage = `url('${product.thumbnail}')`;

    const footerInfo = document.createElement('div');
    if (productsList.classList.contains('home__products-list_block')) {
      footerInfo.classList.add('product-item__info', 'product-footer-info', 'product-footer-info_block');
    } else {
      footerInfo.classList.add('product-item__info', 'product-footer-info', 'product-footer-info_list');
    }

    const ratingTitle = document.createElement('div');
    ratingTitle.classList.add('product-footer-info__rating-title');
    const productRating = Number.isInteger(product.rating) ? `${product.rating}.0` : `${product.rating}`;
    ratingTitle.innerHTML = productRating;

    const ratingStars = document.createElement('div');
    ratingStars.classList.add('product-footer-info__rating-stars');
    ratingStars.style.setProperty('--rating', `${product.rating}`);

    let statusProduct = 'add';
    let buttonLable = 'Add to cart';
    inCart.id.forEach((idInCart) => {
      if (idInCart === product.id) {
        statusProduct = 'remove';
        buttonLable = 'Remove from cart';
      }
    });

    const btnBuyNow = document.createElement('button');
    btnBuyNow.classList.add('product-footer-info__btn-buy', `product-footer-info__btn-buy_${statusProduct}`);
    btnBuyNow.id = `btn_${product.id}`;
    btnBuyNow.innerHTML = buttonLable;

    footerInfo.append(ratingTitle);
    footerInfo.append(ratingStars);
    footerInfo.append(btnBuyNow);

    item.append(headerInfo);
    item.append(itemImg);
    item.append(listInfo);
    item.append(footerInfo);

    productsList.append(item);
  });
  correctionCheckboxItemQuantity('category');
  correctionCheckboxItemQuantity('type');
  addRemoveProduct();
  jumpProductPage();
}
