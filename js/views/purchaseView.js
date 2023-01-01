import View from './View';
class PurchaseView extends View {
  addHandlerPurchaseBtnClicked(func) {
    window.addEventListener('click', function (e) {
      e.stopPropagation();
      const target = e.target.closest('[data-btn-name="purchase-btn"]');
      if (!target) return;
      func();
    });
  }

  renderCart(data) {
    console.log(data);
    if (!data.length) return 'No Items in your cart';

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
        <img src="${element.image}" alt="${element.description}" class="cart-image" />
      </div>
      <div class="cart-item-details flex-center">
        <p class="cart-item-name cart-name-size">${element.title}</p>
        <div class="cart-item-attributes fix-fz">
          <p class="cart-item-price">$${element.price}</p>
          <p class="cart-item-rating">${element.rating.rate}</p>
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
      <p class="purchase-total-price">Total Price: $${data.reduce(
        (acc, cur) => {
          return (acc += cur.price);
        },
        0
      )}</p>
      <p class="purchase-total-items">Items: ${data.length}</p>
    </div>
    <div class="continue-purchase-container">
      <button class="btn purchase-btn fix-width" data-btn-name="purchase-btn">Purchase Now</button>
    </div>
    `;
    return markup;
  }
}

export default new PurchaseView();
