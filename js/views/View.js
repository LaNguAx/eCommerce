export default class View {
  #data;

  render(data, render = true, clear = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.#data = data;
    if (clear) this.clear();
    const markup = this.generateMarkup(this.#data);
    if (!render) return;
    this.parentElement.insertAdjacentHTML('beforeend', markup);
  }

  clear() {
    this.parentElement.innerHTML = '';
  }
  renderSpinner(specifiecElement = this.parentElement) {
    const markup = `
      <div class="loader"></div>
    `;
    this.clear();
    specifiecElement.insertAdjacentHTML('beforeend', markup);
  }
  renderHeader(heading = 'Trending', subheading = 'Our most trending items!') {
    const mainHeading = document.querySelector('.section-heading');
    const subHeading = document.querySelector('.section-subheading');

    mainHeading.textContent = heading;
    subHeading.textContent = subheading;
  }
  renderError(errorCode, error = this.errorMsg) {
    this.clear();
    const markup = `<div class="error"><p>${error}, ${errorCode}</p>
  </div>`;
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
