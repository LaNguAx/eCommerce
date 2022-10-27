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
  state.search.results = (({ products, ...o }) => products)(
    await AJAX(API_URL_PRODUCTS_LIST(brand, offset), API_OPTIONS)
  );
};
