const disableAll = (toggleButtons) => {
  Array.from(toggleButtons).forEach((link) => {
    link.classList.remove('o-sg-section__section--visible');
  });
};

const enable = (element) => {
  element.classList.add('o-sg-section__section--visible');
};

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.js--toggle');
  Array.from(toggleButtons).forEach((link) => {
    link.addEventListener('click', () => {
      disableAll(toggleButtons);
      enable(link);
    });
  });
});
