import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _Array$from from 'babel-runtime/core-js/array/from';
import wcdomready from '../js/wcdomready';

console.log('🚀 patterns library 🚀');

var sectionSelector = function sectionSelector(_el) {
  return '.js--section-' + _el.getAttribute('data-toggle');
};

var disable = function disable(element, parent) {
  parent.querySelector(sectionSelector(element.parentNode)).classList.remove('o-sg-section__section--visible');
};

var enable = function enable(element, parent) {
  parent.querySelector(sectionSelector(element.parentNode)).classList.add('o-sg-section__section--visible');
};

wcdomready(function () {
  // all sections's buttons toggle
  var sections = document.querySelectorAll('.js--section');

  // let the components render first, thats why this hack.
  // All the WC components initialise on dom ready, but they are later in the queue.
  // Here i want that my listener comes at the end. I evaluated that listening to
  // the actual load of the component is too much for this only styleguide relevant js
  // and i dont want to write any code in the component that is needed only for the styleguide
  // TODO: Implement a solution without setTimeout
  setTimeout(function () {
    _Array$from(sections).forEach(function (section) {
      var lastEnabled = null;
      var toggleButtons = section.querySelectorAll('.js--toggle');
      var arr = _Array$from(toggleButtons);

      var _arr = _slicedToArray(arr, 1);

      lastEnabled = _arr[0];

      arr.forEach(function (button) {
        button.addEventListener('click', function () {
          disable(lastEnabled, section);
          enable(button, section);
          lastEnabled = button;
        });
      });
    });
  }, 10);
});