import View from './View';

class mainNavigation extends View {
  parentElement = document.querySelector('.main-navigation');
  menuOpen = false;
  constructor() {
    super();
    this.#handleMenuButtonClick();
  }

  addHandlerLogoClicked(func) {
    document
      .querySelector('.main-logo')
      .closest('.main-logo-container')
      .addEventListener('click', function (e) {
        e.preventDefault();
        func();
      });
  }

  #handleMenuButtonClick() {
    // bad code
    // window.addEventListener('click', e => {
    //   e.preventDefault();
    //   const menuElement = e.target.closest(`[data-btn-name="menu-btn"]`);
    //   const overlay = document.querySelector('.overlay');
    //   const menuContainer = document.querySelector('.menu-container');
    //   // disable scrolling while menu is open
    //   overlay.addEventListener('touchmove', e => e.preventDefault());
    //   menuContainer.addEventListener('touchmove', e => e.preventDefault());
    //   if (e.target.closest('.search-container')) return;
    //   if (overlay && !overlay.classList.contains('hidden'))
    //     return this.#toggleMenu();
    //   if (!menuElement) return;
    //   this.#toggleMenu();
    // });
    // window.addEventListener('click', e => {
    //   e.stopPropagation();
    //   if (e.target === document.querySelector('.menu-container')) return;
    //   if (e.target.closest('.search-container')) return;
    //   if (e.target.closest('[data-btn-name="menu-btn"]') || this.menuOpen)
    //     return this.#toggleMenu();
    //   console.log('test');
    //   return;
    // });
    // FINALLY I FOUND THE PROBLEM FOR THE SHIT SUBMIT FORM NOT WORKING!!!
    // BECAUSE OF THE CODE ABOVE IT DOESNT WORK, THE WINDOW EVENT LISTENER WAS RETURNING ON IT SO IT DIDNT RESPOND. BECAUSE I PREVENTED DEFAULT TWICE ON THE WHOLE WINDOW!!!!! REMOVE THE e.preventDefault();

    /** SOLUTION!! EVENT PROPOGATION::
     * Why it happened?
     * Because the eventListener was attached to the window object and everytime it fired it prevented the default behavior.
     * Because the window.preventDefault() propogated down and it fired on the search form that's why the form didnt send, because it's behavior was prevented from the window.addlistenerEvent e.preventDefault();
     */

    //Fixed code below:
    window.addEventListener('click', e => {
      e.stopPropagation();
      if (e.target === document.querySelector('.menu-container')) return;
      if (e.target.closest('.search-container')) return;
      if (e.target.closest('[data-btn-name="menu-btn"]') || this.menuOpen)
        return this.#toggleMenu();
      return;
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
    this.menuOpen =
      this.menuOpen === false
        ? (this.menuOpen = true)
        : (this.menuOpen = false);
    document.body.style.overflow = !document.body.style.overflow
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }
}

export default new mainNavigation();
