import View from './View';

class SearchView extends View {
  parentElement = document.querySelector('.search-form');

  addSearchHandler(func) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      func();
    });
  }
}

export default new SearchView();
