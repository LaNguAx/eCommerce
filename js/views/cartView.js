import View from './View';

class CartView extends View {
  addHandlerAddToCartClicked(func) {
    this.parentElement.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        const target = e.target.closest('.btn.add-to-cart-btn');
        if (!target) return;
        this.#addToCartAnimation();
        func(target.dataset.id);
      }.bind(this)
    );
  }
  #addToCartAnimation() {
    const cartIcon = document.querySelector(
      '[data-btn-name="cart-btn"] > span'
    );
    const animationFunc = function (element) {
      element.classList.add('add-to-navigation-icon');
      setTimeout(() => {
        element.classList.add('remove-from-navigation-icon');
        element.classList.remove('add-to-navigation-icon');
        setTimeout(() => {
          element.classList.remove('remove-from-navigation-icon');
        }, 1000);
      }, 800);
    };
    animationFunc(cartIcon);
  }
}

export default new CartView();
