import { Filters } from 'utils/types';
import { ProductProperties } from 'utils/types';
import { createProductsList } from '../pages/home/home-utils/createProductsList';
import { containsElement, addElement } from 'utils/helpersArray';
import data from 'data/data.json';

// const products: ProductProperties[] = data.products;

export let filtredIdList: number[] = [];
export const filters: Filters = {
  price: [],
  stock: [],
  type: [],
  category: [],
};

export function createFiltredCollection(): void {
  const filtredProductsByKind: Filters = {
    price: [],
    stock: [],
    type: [],
    category: [],
  };
  filtredIdList = [];

  for (const key in filters) {
    data.products.forEach((product: ProductProperties) => {
      filters[key].forEach((kind: string) => {
        if (product[key] === kind) {
          if (!containsElement<number>(filtredProductsByKind[key], product.id)) {
            addElement<number>(filtredProductsByKind[key], product.id);
          }
        }
      });
    });
    filtredIdList = filtredIdList.concat(filtredProductsByKind[key]);
  }
  filtredIdList = Array.from(new Set(filtredIdList));
  createProductsList();
}
