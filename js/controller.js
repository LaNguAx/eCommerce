import * as model from './model.js';
import View from './view.js';

const initate = (async function () {
  model.loadCategories();
  model.loadProducts();
})();
