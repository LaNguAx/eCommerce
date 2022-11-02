import * as model from './model.js';

const initate = (async function () {
  model.loadCategories();
  model.loadProducts();
})();

console.log(model.AppData.products_info);
