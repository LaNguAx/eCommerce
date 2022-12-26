import View from './View';
class menuView extends View {
  parentElement = document.querySelector('.menu-container > .menu-list');
  errorMsg = 'Categories failed loading.. Try reloading the page.';
  addHandlerMenuItemClicked(func) {
    this.parentElement.addEventListener('click', function (e) {
      const href = e.target
        .closest('.category-item')
        ?.querySelector('.category-link')
        .getAttribute('href');
      if (!href || e.target.closest('.search-container')) return;
      func(href);
    });
  }
  generateMarkup(data) {
    const categoryArr = data.reverse();
    const markup = categoryArr
      .map(category => {
        return `<li class="menu-item category-item"><a href="#${category}"class="link category-link">${
          category[0].toUpperCase() + category.slice(1)
        }</a></li>`;
      })
      .join('');
    return markup;
  }
  // #handleMenuButtonClick() {
  //   window.addEventListener('click', e => {
  //     e.preventDefault();
  //     const menuElement = e.target.closest(`[data-btn-name="menu-btn"]`);
  //     const overlay = document.querySelector('.overlay');

  //     // disable scrolling while menu is open
  //     overlay.addEventListener('touchmove', e => e.preventDefault());

  //     if (e.target.closest('.search-container')) return;
  //     if (overlay && !overlay.classList.contains('hidden'))
  //       return this.#toggleMenu();
  //     if (!menuElement) return;
  //     this.#toggleMenu();
  //   });
  // }
  // #changeMenuIcon() {
  //   const menuIcon = document.querySelector(
  //     `[data-btn-name="menu-btn"] > span`
  //   );
  //   menuIcon.textContent =
  //     menuIcon.textContent === 'manage_search' ? 'close' : 'manage_search';
  // }
  // #toggleMenu() {
  //   const overlay = document.querySelector('.overlay');
  //   const menuContainer = document.querySelector('.menu-container');
  //   const mainElement = document.querySelector('main');
  //   overlay.classList.toggle('hidden');

  //   menuContainer.classList.contains('hidden')
  //     ? (menuContainer.style.transform = 'translateX(0)')
  //     : (menuContainer.style.transform = 'translateX(100%)');

  //   menuContainer.classList.toggle('hidden');
  //   mainElement.classList.toggle('blur');

  //   this.#changeMenuIcon();
  // }
}

export default new menuView();
