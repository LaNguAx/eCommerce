import View from './View';
class HeaderView extends View {
  #parentElement = document.querySelector('.menu-container');
  constructor() {
    super();
    this.#handleMenuButtonClick();
  }
  #handleMenuButtonClick() {
    const header = document.querySelector('header');
    header.addEventListener('click', e => {
      e.preventDefault();
      const menuElement = e.target.closest(`[data-btn-name="menu-btn"]`);
      if (!menuElement) return;
      this.#toggleMenu();
    });
  }
  #toggleMenu() {
    const overlay = document.querySelector('.overlay');
    const menuContainer = document.querySelector('.menu-container');
    const mainElement = document.querySelector('main');

    menuContainer.classList.contains('hidden')
      ? (menuContainer.style.transform = 'translateX(0)')
      : (menuContainer.style.transform = 'translateX(100%)');

    overlay.classList.toggle('hidden');
    menuContainer.classList.toggle('hidden');
    mainElement.classList.toggle('blur');

    // const changeIcon = btnEl.querySelector('span');
    // changeIcon.textContent =
    //   changeIcon.textContent === 'manage_search' ? 'close' : 'manage_search';
    // console.log(changeIcon.textContent);
  }
}

export default new HeaderView();
