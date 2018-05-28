import _appendChild from 'nanohtml/lib/append-child';


export default (function (_ref, childrenFragment) {
  var _article;

  var _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? '' : _ref$classes;
  return _article = document.createElement('article'), _article.setAttribute('class', 'o-container ' + String(classes) + ''), _appendChild(_article, [childrenFragment]), _article;
});