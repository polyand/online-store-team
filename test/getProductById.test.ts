import { getProductData } from '../src/utils/getProductById';
import productsData from '../src/data/data.json';

const productDataObj = {
  id: 1,
  title: 'KONGSBERG',
  description:
    'Fabric upholstery and wood. Accommodates spring and springless mattresses of size 140x200 cm. Without slatted base and mattress. 156x218 cm, height 101 cm',
  price: 250,
  discount: 15,
  rating: 4.5,
  stock: 94,
  type: 'Bed',
  category: 'Bedroom',
  thumbnail: 'data/assets/bedroom/beds/kongsberg/thumbnail.jpg',
  images: [
    'data/assets/bedroom/beds/kongsberg/1.jpg',
    'data/assets/bedroom/beds/kongsberg/2.jpg',
    'data/assets/bedroom/beds/kongsberg/3.jpg',
    'data/assets/bedroom/beds/kongsberg/thumbnail.jpg',
  ],
};

describe('when called with product id', () => {
  it('should return the product data object', () => {
    const result = getProductData(1);
    expect(result).toEqual(productDataObj);
  });
});

describe('when called with invalid id', () => {
  it('should throw an Error', () => {
    expect(() => getProductData(21)).toThrow(/^Can not find product by ID!$/);
  });
});
