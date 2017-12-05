const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

const disable = (element, parent) => {
  parent.querySelector(sectionSelector(element.parentNode)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  parent.querySelector(sectionSelector(element.parentNode)).classList.add('o-sg-section__section--visible');
};

const switchAtomicElemenetsTo = (elementGroupName = '', button, firstCall = false) => {
  const allCategories = document.querySelectorAll('[data-atomic-category]');
  Array.from(allCategories).forEach((element) => {
    element.classList.remove('o-sg-section--visible');
  });

  const dataSelector = elementGroupName ? `="${elementGroupName}"` : '';

  const filteredCategories = document.querySelectorAll(`[data-atomic-category${dataSelector}]`);
  Array.from(filteredCategories).forEach((element) => {
    element.classList.add('o-sg-section--visible');
  });

  if (!button) {
    return;
  }

  if (firstCall) {
    // little hack
    button.href = window.location.href;
    button.click();
    button.href = `#${elementGroupName}`;
  }
};

const syncHashWithAtomicChoice = (firstCall = false) => {
  const { hash } = window.location;
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  const prefix = hash.substring(1, 2);
  switch (prefix) {
    case 'a':
      switchAtomicElemenetsTo('atom', document.querySelector('.js-atomic-switch-to-atom'), firstCall);
      break;
    case 'm':
      switchAtomicElemenetsTo('molecule', document.querySelector('.js-atomic-switch-to-molecule'), firstCall);
      break;
    case 'o':
      switchAtomicElemenetsTo('organism', document.querySelector('.js-atomic-switch-to-organism'), firstCall);
      break;
    default:
      switchAtomicElemenetsTo('organism', document.querySelector('.js-atomic-switch-to-organism'), firstCall);
      break;
  }
  // quick hack for development. @TODO do it better
  setTimeout(() => {
    if (el) {
      el.scrollIntoView();
    }
  }, 150);
};

document.addEventListener('DOMContentLoaded', () => {
  // all sections's buttons toggle
  const sections = document.querySelectorAll('.js--section');

  // let the components render first, thats why this hack.
  // All the WC components initialise on dom ready, but they are later in the queue.
  // Here i want that my listener comes at the end. I evaluated that listening to
  // the actual load of the component is too much for this only styleguide relevant js
  // and i dont want to write any code in the component that is needed only for the styleguide
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

  if (!window.location.hash) {
    window.location.hash = '#organism';
  }

  setTimeout(() => {
    syncHashWithAtomicChoice(true);
  }, 100);

  window.onhashchange = () => {
    syncHashWithAtomicChoice(false);
  };
});
