import 'core-js/actual';
import * as model from './model.js';
import View from './views/View.js';
import HeaderView from './views/headerView.js';
import menuView from './views/menuView.js';
import favoritesView from './views/favoritesView.js';
import productView from './views/productView.js';
import productsView from './views/productsView.js';
import mainNavigation from './views/mainNavigation.js';
import searchView from './views/searchView.js';
import cartView from './views/cartView.js';
import purchaseView from './views/purchaseView.js';
const productsController = async function (category = undefined) {
  try {
    // simply beautiful code is written here, just amazing to see that I've created such thing. Basically this code, loads the products when the website is opened and then you can also use this to load specifiec products from categories :) It can also be used for the search component later

    if (!category) {
      window.location.hash = 'homepage';
      model.state.currentCategory = 'homepage';
    }

    const productsContainer = document.querySelector('.products');

    productsView.changeGridLayout(2);

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
    menuView.renderError(error);
  }
};

const menuController = async function (href) {
  try {
    window.location.hash = href;
    model.state.currentCategory = href.slice(1);
    //wow this is beautifuly working, because the beautiful productsController function I have created.
    await productsController(model.state.currentCategory);
    window.scrollTo({
      left: 0,
      top:
        document.querySelector('.products-section').getBoundingClientRect()
          .top - document.body.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
};

const searchController = async function (searchQuery) {
  try {
    await model.loadProducts();

    const foundProducts = model.searchResults(searchQuery);

    if (!foundProducts.length)
      throw new Error(`No products found! <br> Search query: ${searchQuery}`);

    searchView.changeGridLayout(2);

    searchView.renderSpinner();
    searchView.renderHeader(
      `Search Results`,
      `View your search results for ' <strong>${searchQuery}</strong> '`
    );

    searchView.render(foundProducts);
    mainNavigation.toggleMenu();
    searchView.setScrollTo('.products-section');
  } catch (error) {
    searchView.renderHeader(`Oops! Something went wrong..`, `View error below`);

    mainNavigation.toggleMenu();

    searchView.renderError(undefined, error);
  }
};

const productController = async function (productID) {
  try {
    productView.renderSpinner();
    productView.renderHeader();

    const productData = [await model.loadProduct(productID)];

    productView.render(productData);
    window.location.hash = productData[0].id;
    model.state.product = productData;
    productView.changeGridLayout(1);

    productView.setScrollTo('.product-container');
  } catch (error) {
    productView.renderError(error);
  }
};

const addToCartController = async function (productID = undefined) {
  try {
    if (!productID) {
      if (model.state.cart.length > 0) {
        cartView.updateCartSubheading('View the items in your cart');
        return cartView.render(model.state.cart);
      }
      return cartView.updateCartSubheading();
    }

    const product = await model.loadProduct(productID);
    const productExistsInCart = model.state.cart.find(
      el => el.id === product.id
    );
    if (productExistsInCart) return;
    cartView.renderSpinner();

    model.addToCart(product);

    cartView.render(model.state.cart);

    cartView.updateCartSubheading('View the items in your cart');
  } catch (error) {
    console.log(error);
  }
};

const deleteCartItemController = function (productID) {
  model.deleteCartItem(productID);
  cartView.render(model.state.cart);
  if (!model.state.cart.length) {
    cartView.updateCartSubheading();
    cartView.clear();
  }
  if (window.location.hash === '#purchase') {
    purchaseView.render(model.state.cart);
  }
};

const cartItemClickedController = async function (productID) {
  if (mainNavigation.cartOpen) mainNavigation.toggleCart();
  productController(productID);
  cartView.setScrollTo('.products');
};

const purchaseController = async function (productID, renderThankYou = false) {
  purchaseView.setScrollTo('.products');
  if (renderThankYou) {
    purchaseView.renderSpinner();
    setTimeout(() => {
      purchaseView.changeGridLayout(1);
      purchaseView.renderHeader(
        'Thank You!',
        'Thank you for purchasing, come again!'
      );
      model.clearCart();
      cartView.updateCartSubheading();
      cartView.clear();
      return purchaseView.renderThankYouMsg();
    }, 1500);
    return;
  }

  window.location.hash = 'purchase';
  purchaseView.renderHeader('Purchase', 'Continue your purchasing journey');
  purchaseView.changeGridLayout(2);
  purchaseView.renderSpinner();
  await addToCartController(productID);
  if (mainNavigation.cartOpen) mainNavigation.toggleCart();
  purchaseView.render(model.state.cart);
};

const initate = (async function () {
  try {
    window.location.hash = 'homepage';
    await productsController();
    await categoriesController();
    model.loadCart();
    await addToCartController();

    menuView.addHandlerMenuItemClicked(menuController);
    mainNavigation.addHandlerLogoClicked(productsController);
    searchView.addSearchHandler(searchController);
    productView.addHandlerProductClicked(productController);
    cartView.addHandlerAddToCartClicked(addToCartController);
    cartView.addHandlerCartItemClicked(cartItemClickedController);
    cartView.addHandlerCartItemDeleted(deleteCartItemController);
    purchaseView.addHandlerPurchaseBtnClicked(purchaseController);
  } catch (error) {
    productView.changeGridLayout(1);
    productsView.renderError(error);
  }
})();
