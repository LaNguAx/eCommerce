import View from './View';

class SearchView extends View {
  #parentElement = document.querySelector('.search-form');

  #getQuery() {
    return this.#parentElement.querySelector('.search-bar').value;
  }

  generateMarkup(data) {
    const markup = data
      .map(product => {
        return `
      <div class="product-container preview" data-id="${product.id}">
      <img class="product-image" src="${product.image}" alt="${product.description}" />
      <div class="product-headings-container">
        <div class="product-heading">${product.title}</div>
        <span class="product-price">${product.price}$</span>
      </div>
      <div class="interaction-buttons-container">
        <button class="btn purchase-btn">purchase</button>
        <button
          class="btn add-to-cart-btn material-symbols-outlined interaction-icon"
        >
          add_shopping_cart
        </button>
      </div>
      </div>
      `;
      })
      .join('');

    return markup;
  }

  addSearchHandler(func) {
    this.#parentElement.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        const query = this.#getQuery();
        // if (!query || query.length < 3) return;
        if (!query) return;
        func(query);
      }.bind(this)
    );
  }
}

export default new SearchView();
