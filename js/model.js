import { RES_PER_PAGE, API_URL } from './config.js';

import { AJAX } from './helpers.js';

export const AppData = {
  categories: [],
  categories_subheading: {
    electronics: 'Innovative Electronics just for you!',
    jewelery: 'Beautiful Jewelery just for you!',
    "men's clothing": 'Manly clothes for a gentleman!',
    "women's clothing": 'The wardrobe a lady needs!',
  },
  products_info: {
    products: [],
    get product_count() {
      return this.products.length;
    },
  },
};

export const state = {
  product: undefined,
  currentCategory: 'homepage',
  search: {
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  cart: [],
  favorites: [],
};

export const loadCategories = async function () {
  try {
    const categories = [...new Set(await AJAX(`${API_URL}/categories`))];
    AppData.categories = categories;
  } catch (error) {
    throw error;
  }
};
export const loadProducts = async function (category = undefined) {
  try {
    // if (!category) {
    //   const products = await AJAX(`${API_URL}`);
    //   AppData.products_info.products = products;
    //   return;
    // }
    // const products = await AJAX(`${API_URL}/category/${category}`);
    // AppData.products_info.products = products;

    const products = await AJAX(
      `${API_URL}/${category ? `category/${category}` : ''}`
    );
    AppData.products_info.products = products;
  } catch (error) {
    throw error;
  }
};
// Get products in a specific category
// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
