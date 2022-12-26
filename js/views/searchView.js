import View from './View';

class SearchView extends View {
  parentElement = document.querySelector('.search-form');

  addSearchHandler(func) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('searchview test');
      func();
    });
    console.log('addSearch test');
  }
}

export default new SearchView();
