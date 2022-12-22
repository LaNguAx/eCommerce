export default class View {
  #data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this.#data = data;
    this.clear();
    const markup = this.generateMarkup(this.#data);
    if (!render) return;
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
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
}
