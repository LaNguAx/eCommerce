import { RES_PER_PAGE, API_URL } from './config.js';

import { AJAX } from './helpers.js';

export const AppData = {
  categories: [],
  products_info: {
    products: [],
    get product_count() {
      return this.products.length;
    },
  },
};

export const state = {
  product: undefined,
  search: {
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadCategories = async function () {
  try {
    const categories = [...new Set(await AJAX(`${API_URL}categories`))];
    AppData.categories = categories;
  } catch (error) {
    console.error(error);
  }
};
export const loadProducts = async function () {
  try {
    const products = await AJAX(`${API_URL}`);
    AppData.products_info.products = products;
  } catch (error) {
    console.error(error);
  }
};
