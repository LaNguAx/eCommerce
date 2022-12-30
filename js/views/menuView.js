import View from './View';
class menuView extends View {
  parentElement = document.querySelector('.menu-container > .menu-list');
  errorMsg = 'Categories failed loading.. Try reloading the page.';
  menuOpen = false;
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
}

export default new menuView();
