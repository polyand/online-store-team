import { Filters } from 'utils/types';
import { ProductProperties } from 'utils/types';
import { createProductsList } from './createProductsList';
import { containsElement, addElement } from 'utils/helpersArray';
import data from 'data/data.json';

export let filtredIdList: number[] = [];
export const filters: Filters = {
  price: [],
  stock: [],
  type: [],
  category: [],
};

function createFiltredIdList(list: number[]): void {
  filtredIdList = [];
  const map: {
    [key: string]: number;
  } = list.reduce(
    (
      acc: {
        [key: string]: number;
      },
      elem: number
    ) => {
      acc[elem] = acc[elem] ? acc[elem] + 1 : 1;
      return acc;
    },
    {}
  );
  for (const key in map) {
    if (map[key] == 4) {
      filtredIdList.push(+key);
    }
  }
  createProductsList();
}

export function createFiltredCollection(): void {
  const filtredProductsByKind: Filters = {
    price: [],
    stock: [],
    type: [],
    category: [],
  };
  let resultList: number[] = [];

  for (const key in filters) {
    data.products.forEach((product: ProductProperties) => {
      if (key === 'stock' || key === 'price') {
        if (product[key] >= filters[key][0] && product[key] <= filters[key][1]) {
          addElement<number>(filtredProductsByKind[key], product.id);
        }
      } else {
        if (filters[key].length == 0) {
          addElement<number>(filtredProductsByKind[key], product.id);
        }
        filters[key].forEach((kind: string) => {
          if (product[key] === kind) {
            if (!containsElement<number>(filtredProductsByKind[key], product.id)) {
              addElement<number>(filtredProductsByKind[key], product.id);
            }
          }
        });
      }
    });

    resultList = resultList.concat(filtredProductsByKind[key]);
  }
  createFiltredIdList(resultList);
}
