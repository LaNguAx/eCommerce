import View from './View';

class CartView extends View {
  parentElement = document.querySelector('.cart-list');
  errorMsg = `Your cart is empty..`;

  constructor() {
    super();
    this.updateCartSubheading();
  }

  addHandlerAddToCartClicked(func) {
    document.querySelector('.products').addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        const target = e.target.closest('.btn.add-to-cart-btn');
        if (!target) return;
        this.#addToCartAnimation();
        const targetID = target.closest('.product-container').dataset.id;
        func(targetID);
      }.bind(this)
    );
  }

  addHandlerCartItemClicked(func) {
    window.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.target.closest('.cart-item');
      if (!target || e.target.closest('[data-btn-name="clear-cart-item"]'))
        return;
      console.log(target);
      func(target.dataset.id);
    });
  }

  addHandlerCartItemDeleted(func) {
    window.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.target.closest('[data-btn-name="clear-cart-item"]');
      if (!target) return;
      const targetID = target.closest('.cart-item').dataset.id;
      func(targetID);
    });
  }

  updateCartSubheading(subheading = this.errorMsg) {
    const sub = document.querySelector('.cart-subheading');
    sub.textContent = subheading;
  }

  generateMarkup(data) {
    const markup = data.map(product => {
      return `<a href="#${
        product.id
      }" class="link"><li class="cart-item" data-id=${product.id}>
      <span
      class="material-symbols-outlined cart-clear-item"
      data-btn-name="clear-cart-item"
    >
      cancel
    </span>


      <div class="cart-image-container">
        <img src="${product.image}" alt="${
        product.description
      }" class="cart-image" />
      </div>
      <div class="cart-item-details">
        <p class="cart-item-name">
          ${product.title}
        </p>
        <div class="cart-item-attributes">
          <p class="cart-item-price">$${product.price}</p>
          <p class="cart-item-rating">${'⭐'.repeat(
            Math.round(product.rating.rate)
          )}</p>
        </div>
      </div>
    </li></a>`;
    });
    return markup;
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
