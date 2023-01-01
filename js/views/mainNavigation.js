import View from './View';

class mainNavigation extends View {
  menuOpen = false;
  cartOpen = false;
  constructor() {
    super();
    this.#handleMenusClick();
  }
  addHandlerLogoClicked(func) {
    document
      .querySelector('.main-logo')
      .closest('.main-logo-container')
      .addEventListener('click', function (e) {
        e.preventDefault();
        func();
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        });
      });
  }

  #handleMenusClick() {
    window.addEventListener('click', e => {
      const target = e.target;
      if (e.target.closest('[data-btn-name="clear-cart-item"]')) return;
      if (e.target.closest('.cart-container')) return;
      if (e.target === document.querySelector('.menu-container')) return;
      if (e.target.closest('.search-container')) return;

      if (target.closest('[data-btn-name="menu-btn"]') || this.menuOpen)
        return this.toggleMenu();
      if (target.closest('[data-btn-name="cart-btn"]') || this.cartOpen)
        return this.toggleCart();
    });
  }

  toggleCart() {
    const cartContainer = document.querySelector('.cart-container');
    const overlay = document.querySelector('.overlay');
    const mainElement = document.querySelector('main');

    this.cartOpen = this.cartOpen
      ? (this.cartOpen = false)
      : (this.cartOpen = true);

    if (this.menuOpen) this.toggleMenu();

    cartContainer.classList.contains('hidden')
      ? (cartContainer.style.transform = 'translateX(0)')
      : (cartContainer.style.transform = 'translateX(-100%)');

    overlay.classList.toggle('hidden');
    cartContainer.classList.toggle('hidden');
    mainElement.classList.toggle('blur');

    this.#changeCartIcon();

    document.body.style.overflow = !document.body.style.overflow
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }
  toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const overlay = document.querySelector('.overlay');
    const mainElement = document.querySelector('main');

    this.menuOpen = this.menuOpen
      ? (this.menuOpen = false)
      : (this.menuOpen = true);

    if (this.cartOpen) this.toggleCart();

    menuContainer.classList.contains('hidden')
      ? (menuContainer.style.transform = 'translateX(0)')
      : (menuContainer.style.transform = 'translateX(100%)');

    overlay.classList.toggle('hidden');
    menuContainer.classList.toggle('hidden');
    mainElement.classList.toggle('blur');

    this.#changeMenuIcon();

    document.body.style.overflow = !document.body.style.overflow
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }

  #changeMenuIcon() {
    const menuIcon = document.querySelector(
      `[data-btn-name="menu-btn"] > span`
    );
    menuIcon.textContent =
      menuIcon.textContent === 'manage_search' ? 'close' : 'manage_search';
  }
  #changeCartIcon() {
    const cartIcon = document.querySelector(
      '[data-btn-name="cart-btn"] > span'
    );

    this.cartOpen
      ? cartIcon.classList.add('cart-fill')
      : cartIcon.classList.remove('cart-fill');
  }
}

export default new mainNavigation();
