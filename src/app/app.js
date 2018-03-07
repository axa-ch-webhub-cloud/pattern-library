console.log('🚀 patterns library 🚀');

const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

const disable = (element, parent) => {
  parent.querySelector(sectionSelector(element.parentNode)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  parent.querySelector(sectionSelector(element.parentNode)).classList.add('o-sg-section__section--visible');
};

document.addEventListener('DOMContentLoaded', () => {
  // all sections's buttons toggle
  const sections = document.querySelectorAll('.js--section');

  // let the components render first, thats why this hack.
  // All the WC components initialise on dom ready, but they are later in the queue.
  // Here i want that my listener comes at the end. I evaluated that listening to
  // the actual load of the component is too much for this only styleguide relevant js
  // and i dont want to write any code in the component that is needed only for the styleguide
  // TODO: Implement a solution without setTimeout
  setTimeout(() => {
    Array.from(sections).forEach((section) => {
      let lastEnabled = null;
      const toggleButtons = section.querySelectorAll('.js--toggle');
      const arr = Array.from(toggleButtons);
      [lastEnabled] = arr;
      arr.forEach((button) => {
        button.addEventListener('click', () => {
          disable(lastEnabled, section);
          enable(button, section);
          lastEnabled = button;
        });
      });
    });
  }, 10);
});
