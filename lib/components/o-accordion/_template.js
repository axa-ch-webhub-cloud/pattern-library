import _appendChild from 'nanohtml/lib/append-child';


export default (function (_ref, childrenFragment) {
  var _;

  var classes = _ref.classes;
  return _ = document.createElement('article'), _.setAttribute('class', '' + String(classes) + ''), _appendChild(_, [childrenFragment]), _;
});