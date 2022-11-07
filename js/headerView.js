export default class HeaderView {
  constructor() {
    this.#stickyNavigation();
  }
  #stickyNavigation() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const mainElement = document.querySelector('main');
    mainElement.style.marginTop = `${headerHeight}px`;
  }
}
