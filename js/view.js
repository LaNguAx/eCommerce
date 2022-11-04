class View {
  #data;
  #header = document.querySelector('header');
  constructor() {
    this.#stickyNavigation();
  }
  #stickyNavigation() {
    const headerHeight = this.#header.offsetHeight;
    const mainElement = document.querySelector('main');
    mainElement.style.marginTop = `${headerHeight}px`;
  }
}

export default new View();
