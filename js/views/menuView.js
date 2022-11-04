import View from './View';
class MenuView extends View {
  #parentElement = document.querySelector('.menu-container');
  constructor() {
    super();
    this.#handleMenuButtonClick();
  }
  #handleMenuButtonClick() {
    window.addEventListener('click', e => {
      e.preventDefault();
      const btnElement = e.target.closest(`[data-btn-name="menu-btn"]`);
      if (!btnElement) return;
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

export default new MenuView();
