import View from './View';

class ProductView extends View {
  errorMsg = `An error has occured loading the requested product. Please try to reload.`;

  addHandlerProductClicked(func) {
    this.parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.target.closest('.product-container.preview');
      const returnsTargets = e.target.closest('.interaction-buttons-container');

      if (!target || returnsTargets) return;

      func(target.dataset.id);
    });
  }

  generateMarkup(data) {
    const markup = data
      .map(product => {
        return `
      <div class="product-container" data-id="${product.id}">
      <img class="product-image " style="margin-bottom:2rem;" src="${
        product.image
      }" alt="${product.description}" />
      <div class="product-headings-container" style="border-top: 2px solid #4d4d4d;">
        <p class="product-heading" style="font-size: 3.2rem; white-space: initial; margin-bottom:1rem; padding-top:1rem;">${
          product.title
        }</p>
        <p class="product-description">${product.description}</p>
        <p class="product-stats "><span class="rating">Rating: ${'⭐'.repeat(
          Math.round(product.rating.rate)
        )}</span><span class="stock">Left in stock: ${
          product.rating.count
        }</span> </p>
        <span class="product-price" style="font-size: 2.4rem; white-space: initial; margin-bottom:2rem; width: 80%; margin-inline:auto; font-weight:bold;
        ">${product.price}$</span>
      </div>
      <div class="interaction-buttons-container" style="width: 70%; height:auto;">
        <button class="btn purchase-btn" style="font-size: 3rem; padding:1rem;">purchase</button>
        <button
          class="btn add-to-cart-btn material-symbols-outlined interaction-icon" style="font-size: 3.4rem;"
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

export default new ProductView();
