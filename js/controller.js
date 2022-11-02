import * as model from './model.js';

const initate = (async function () {
  model.loadCategories();
  model.loadProducts();
})();
