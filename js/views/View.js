export default class View {
  parentElement = document.querySelector('.products');
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
  renderHeader(heading = '', subheading = '') {
    const mainHeading = document.querySelector('.section-heading');
    const subHeading = document.querySelector('.section-subheading');

    mainHeading.innerHTML = heading;
    subHeading.innerHTML = subheading;
  }
  renderError(errorCode = '', error = this.errorMsg) {
    this.clear();
    const markup = `<div class="error"><p>${error}<br> ${errorCode}</p>
  </div>`;
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  changeGridLayout(columns) {
    this.parentElement.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }
  setScrollTo(elementRelative) {
    window.scrollTo({
      left: 0,
      top:
        document.querySelector(elementRelative).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  }
}
