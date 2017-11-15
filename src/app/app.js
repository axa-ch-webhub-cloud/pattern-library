const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

let lastMainButton = null;

const disable = (element, parent) => {
  element.classList.remove('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  element.classList.add('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.add('o-sg-section__section--visible');
};

const switchAtomicElemenetsTo = (elementGroupName = '', button) => {
  const allCategories = document.querySelectorAll('[data-atomic-category]');
  Array.from(allCategories).forEach((element) => {
    element.classList.remove('o-sg-section--visible');
  });

  const dataSelector = elementGroupName ? `="${elementGroupName}"` : '';

  const filteredCategories = document.querySelectorAll(`[data-atomic-category${dataSelector}]`);
  Array.from(filteredCategories).forEach((element) => {
    element.classList.add('o-sg-section--visible');
  });

  button.classList.add('o-sg-section__button--selected');

  if (lastMainButton && lastMainButton !== button) {
    lastMainButton.classList.remove('o-sg-section__button--selected');
  }

  lastMainButton = button;
};

const syncHashWithAtomicChoice = () => {
  const { hash } = window.location;
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (hash.length) {
    const prefix = hash.substring(1, 2);
    switch (prefix) {
      case 'a':
        switchAtomicElemenetsTo('atom', document.querySelector('[data-atomic-switch-to="atom"]'));
        break;
      case 'm':
        switchAtomicElemenetsTo('molecule', document.querySelector('[data-atomic-switch-to="molecule"]'));
        break;
      case 'o':
        switchAtomicElemenetsTo('organism', document.querySelector('[data-atomic-switch-to="organism"]'));
        break;
      default:
        break;
    }
    // quick hack for development. @TODO do it better
    setTimeout(() => {
      if (el) {
        el.scrollIntoView();
      }
    }, 150);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // all sections's buttons toggle
  const sections = document.querySelectorAll('.js--section');

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

  // main buttons atomic toggle
  const mainButtons = document.querySelectorAll('.js--atomic-switch');
  Array.from(mainButtons).forEach((button, index) => {
    if (index === 0) {
      lastMainButton = button;
    }
    button.addEventListener('click', () => {
      const switchTo = button.getAttribute('data-atomic-switch-to');
      switchAtomicElemenetsTo(switchTo, button);
    });
  });

  syncHashWithAtomicChoice();
  window.onhashchange = () => {
    window.location.reload();
  };
});
