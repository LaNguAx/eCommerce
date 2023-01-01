import { RES_PER_PAGE, API_URL } from './config.js';

import { AJAX } from './helpers.js';

export const AppData = {
  categories: [],
  categories_subheading: {
    homepage: 'View our most trending items!',
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

export const searchResults = function (searchQuery) {
  const foundProducts = AppData.products_info.products.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );
  return foundProducts;
};

export const loadProduct = async function (productID) {
  try {
    const product = await AJAX(`${API_URL}/${productID}`);
    return product;
  } catch (error) {
    throw error;
  }
};

const saveCart = function () {
  localStorage.setItem('cart', JSON.stringify(state.cart));
};
export const loadCart = function () {
  const storage = JSON.parse(localStorage.getItem('cart'));
  if (!storage) return;
  state.cart = storage;
};
export const addToCart = function (product) {
  try {
    state.cart.push(product);
    saveCart();
  } catch (error) {
    throw error;
  }
};

export const clearCart = function () {
  localStorage.clear();
  state.cart = [];
};

export const deleteCartItem = function (productID) {
  const newCart = state.cart.filter(
    element => element.id !== Number(productID)
  );
  state.cart = newCart;
  saveCart();
};
