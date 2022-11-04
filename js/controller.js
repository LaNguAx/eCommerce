import * as model from './model.js';
import View from './views/View.js';
import menuView from './views/menuView.js';

const initate = (async function () {
  model.loadCategories();
  model.loadProducts();
})();
