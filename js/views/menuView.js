import View from './View';
class MenuView extends View {
  #parentElement = document.querySelector('.menu-container');
  constructor() {
    super();
    this.#handleMenuButtonClick();
  }
  #handleMenuButtonClick() {
    const header = document.querySelector('header');
    header.addEventListener('click', e => {
      e.preventDefault();
      const btnElement = e.target.closest(`[data-btn-name="menu-btn"]`);
      if (!btnElement) return;
      this.#toggleMenu();
    });
  }
  #toggleMenu() {
    const overlay = document.querySelector('.overlay');
    const menuContainer = document.querySelector('.menu-container');

    overlay.classList.toggle('hidden');
    menuContainer.classList.toggle('hidden');

    menuContainer.style.transform = 'translateX(0)';
  }
}

export default new MenuView();
