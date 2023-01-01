import View from './View';
class PurchaseView extends View {
  errorMsg = 'Your cart is empty';

  addHandlerPurchaseBtnClicked(func) {
    window.addEventListener('click', function (e) {
      e.stopPropagation();
      const target = e.target.closest('[data-btn-name="purchase-btn"]');
      if (!target) return;
      const targetID = target?.closest('.product-container')?.dataset?.id;
      if (target.closest('.purchase-now-container'))
        return func(targetID, true);
      if (target) return func(targetID);
    });
  }

  renderThankYouMsg() {
    this.clear();
    this.parentElement.insertAdjacentHTML(
      'beforeend',
      `            <div class="thank-you-container">
    <p class="thank-you-text">
      Thank you for your purchase!<br />Visit us again
    </p>
  </div>
`
    );
  }

  renderCart(data) {
    const markup = `${data
      .map(element => {
        return `        <li class="cart-item" data-id="${element.id}">
      <span
        class="material-symbols-outlined cart-clear-item"
        data-btn-name="clear-cart-item"
      >
        cancel
      </span>

      <div class="cart-image-container purchase-size">
        <img src="${element.image}" alt="${
          element.description
        }" class="cart-image" />
      </div>
      <div class="cart-item-details flex-center">
        <p class="cart-item-name cart-name-size">${element.title}</p>
        <div class="cart-item-attributes fix-fz">
          <p class="cart-item-price">$${Number(element.price).toFixed(2)}</p>
          <p class="cart-item-rating">${'⭐'.repeat(
            Math.round(element.rating.rate)
          )}</p>
        </div>
      </div>
    </li>
`;
      })
      .join('')}`;

    return markup;
  }

  generateMarkup(data) {
    const markup = `
    <div class="purchase-container">
    <div class="purchase-cart-container">
      <ul class="cart-list">${this.renderCart(data)}
        <div class="divider"></div>
      </ul>
    </div>
    <div class="purchase-details">
      <p class="purchase-total-price">Total Price: $${Number(
        data.reduce((acc, cur) => (acc += cur.price), 0)
      ).toFixed(2)}</p>
      <p class="purchase-total-items">Items: ${data.length}</p>
    </div>
    <div class="continue-purchase-container purchase-now-container">
      <button class="btn purchase-btn fix-width" data-btn-name="purchase-btn">Purchase Now</button>
    </div>
    `;
    return markup;
  }
}

export default new PurchaseView();
