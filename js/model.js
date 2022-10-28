import {
  API_OPTIONS,
  API_URL_CATEGORIES_LIST,
  API_URL_PRODUCTS_LIST,
  RES_PER_PAGE,
} from './config.js';

import { AJAX } from './helpers.js';

export const state = {
  search: {
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

// fetch(API_URL_CATEGORY_LIST, API_OPTIONS)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response.brands[0]);
//     console.log(
//       response.brands[0].children.map(el => {
//         return console.log(el.content.title, el.link.categoryId);
//       })
//     );
//   })
//   .catch(err => console.error(err));

// fetch(API_URL_PRODUCT_LIST(BrandsCategoryID.adidas), API_OPTIONS)
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch(API_URL_PRODUCTS_LIST(BrandsCategoryID.lacoste, 120), API_OPTIONS)
//   .then(response => response.json())
//   .then(response => console.log(response));

export const getCategoryProductList = async function (brand, offset) {
  const products = (({ products, ...o }) => products)(
    await AJAX(API_URL_PRODUCTS_LIST(brand, offset), API_OPTIONS)
  );
  state.search.results = products.map(prod => {
    const fixedObj = (({
      brandName,
      colour,
      id,
      imageUrl,
      name,
      price,
      ...o
    }) => ({ brandName, colour, id, imageUrl, name, price }))(prod);
    return fixedObj;
  });
};

// Get full product details
// fetch(
//   'https://asos2.p.rapidapi.com/products/v3/detail?id=202841816&lang=en-US&store=US&sizeSchema=US&currency=USD',
//   API_OPTIONS
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
