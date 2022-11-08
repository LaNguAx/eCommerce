import View from './View';

class TrendingView extends View {
  parentElement = document.querySelector('.trending-section > .products');

  generateMarkup(data) {
    const markup = data
      .map(product => {
        return `
      <div class="product-container" data-id="${product.id}">
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
}

export default new TrendingView();
