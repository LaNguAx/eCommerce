import * as model from './model.js';
import View from './views/View.js';
import HeaderView from './views/headerView.js';
import menuView from './views/menuView.js';
import favoritesView from './views/favoritesView.js';
import productView from './views/productView.js';
import trendingView from './views/trendingView.js';
import mainNavigation from './views/mainNavigation.js';

const trendingController = async function () {
  const trendingSection = document.querySelector('.trending-section');
  trendingView.renderSpinner(trendingSection);

  await model.loadProducts();

  trendingView.render(model.AppData.products_info.products);
};

const menuController = async function (href) {
  // window.location.hash = `#${href}`;
  console.log(window.location.hash);
};

const initate = (async function () {
  await trendingController();
  menuView.addHandlerMenuItemClicked(menuController);
})();
