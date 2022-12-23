import * as model from './model.js';
import View from './views/View.js';
import HeaderView from './views/headerView.js';
import menuView from './views/menuView.js';
import favoritesView from './views/favoritesView.js';
import productView from './views/productView.js';
import productsView from './views/productsView.js';
import mainNavigation from './views/mainNavigation.js';

const productsController = async function (category = undefined) {
  try {
    // simply beautiful code is written here, just amazing to see that I've created such thing. Basically this code, loads the products when the website is opened and then you can also use this to load specifiec products from categories :) It can also be used for the search component later

    if (!category) {
      window.location.hash = 'homepage';
      model.state.currentCategory = 'homepage';
    }

    const productsContainer = document.querySelector('.products');

    productsView.renderSpinner(productsContainer);

    await model.loadProducts(category);

    productsView.renderHeader(
      model.state.currentCategory[0].toUpperCase() +
        model.state.currentCategory.slice(1),
      model.AppData.categories_subheading[model.state.currentCategory]
    );

    productsView.render(model.AppData.products_info.products);
  } catch (error) {
    productsView.renderError(error);
  }
};

const categoriesController = async function () {
  try {
    await model.loadCategories();

    menuView.render(model.AppData.categories, true, false);
  } catch (error) {
    console.log(error);
  }
};

const menuController = async function (href) {
  try {
    window.location.hash = href;
    model.state.currentCategory = href.slice(1);
    //wow this is beautifuly working, because the beautiful productsController function I have created.
    await productsController(model.state.currentCategory);
  } catch (error) {
    console.log(error);
  }
};

const initate = (async function () {
  try {
    window.location.hash = 'homepage';
    await productsController();
    await categoriesController();
    menuView.addHandlerMenuItemClicked(menuController);
    mainNavigation.addHandlerLogoClicked(productsController);
  } catch (error) {
    console.log(error);
  }
})();
