import View from './View';
class HeaderView extends View {
  #parentElement = document.querySelector('.menu-container');
  constructor() {
    super();
    this.#handleMenuButtonClick();
    this.#handleMenuItemClick();
  }

  #handleMenuItemClick() {
    this.#parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('test');
    });
  }

  #handleMenuButtonClick() {
    window.addEventListener('click', e => {
      e.preventDefault();
      const menuElement = e.target.closest(`[data-btn-name="menu-btn"]`);
      const overlay = e.target.closest('.overlay');
      if (overlay && !overlay.classList.contains('hidden'))
        return this.#toggleMenu();
      if (!menuElement) return;
      this.#toggleMenu();
    });
  }
  #changeMenuIcon() {
    const menuIcon = document.querySelector(
      `[data-btn-name="menu-btn"] > span`
    );
    menuIcon.textContent =
      menuIcon.textContent === 'manage_search' ? 'close' : 'manage_search';
  }
  #toggleMenu() {
    const overlay = document.querySelector('.overlay');
    const menuContainer = document.querySelector('.menu-container');
    const mainElement = document.querySelector('main');
    overlay.classList.toggle('hidden');

    menuContainer.classList.contains('hidden')
      ? (menuContainer.style.transform = 'translateX(0)')
      : (menuContainer.style.transform = 'translateX(100%)');

    menuContainer.classList.toggle('hidden');
    mainElement.classList.toggle('blur');

    this.#changeMenuIcon();
  }
}

export default new HeaderView();
