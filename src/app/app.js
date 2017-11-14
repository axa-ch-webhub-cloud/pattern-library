const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

const disable = (element, parent) => {
  element.classList.remove('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  element.classList.add('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.add('o-sg-section__section--visible');
};

document.addEventListener('DOMContentLoaded', () => {
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
});
