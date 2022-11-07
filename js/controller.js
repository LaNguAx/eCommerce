import * as model from './model.js';
import View from './views/View.js';
import HeaderView from './views/headerView.js';
import menuView from './views/menuView.js';
import favoritesView from './views/favoritesView.js';

const initate = (async function () {
  model.loadCategories();
  model.loadProducts();
})();

console.log(model.AppData);
console.log(model.state);
