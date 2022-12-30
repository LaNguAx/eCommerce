class HeaderView {
  constructor() {
    this.#stickyNavigation();
  }
  #stickyNavigation() {
    //   const sectionHeroEl = document.querySelector('.header');

    //   const obs = new IntersectionObserver(
    //     function (entries) {
    //       const ent = entries[0];
    //       console.log(ent);

    //       if (ent.isIntersecting === false) {
    //         // sectionHeroEl.classList.add('sticky');
    //         console.log('not intersecting');
    //       }

    //       if (ent.isIntersecting === true) {
    //         // sectionHeroEl.classList.remove('sticky');
    //         console.log('is intersecting');
    //       }
    //     },
    //     {
    //       // In the viewport
    //       root: null,
    //       threshold: 1,
    //       rootMargin: `${sectionHeroEl.offsetHeight}px`,
    //     }
    //   );
    //   obs.observe(sectionHeroEl);
    // }

    const creditsSection = document.querySelector('.credits-section');
    const header = document.querySelector('.header');
    const observer = new IntersectionObserver(
      function (entries) {
        const [entry] = entries;
        console.log(entry);
        if (!entry.isIntersecting) header.classList.add('sticky');
        if (entry.isIntersecting) header.classList.remove('sticky');
      },
      { root: null, threshold: 0, rootMargin: '' }
    );

    observer.observe(creditsSection);
  }
}
export default new HeaderView();
