class HeaderView {
  constructor() {
    this.#stickyNavigation();
  }
  #stickyNavigation() {
    const mainContainer = document.querySelector('.main-container');
    const headerEl = document.querySelector('.header');
    mainContainer.style.marginTop = `${headerEl.offsetHeight}px`;
  }
}
export default new HeaderView();
