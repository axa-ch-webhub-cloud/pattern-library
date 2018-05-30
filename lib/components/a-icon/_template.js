var _svgNamespace = 'http://www.w3.org/2000/svg',
    _xlinkNamespace = 'http://www.w3.org/1999/xlink';
import _appendChild from 'nanohtml/lib/append-child';


export default (function () {
  var _use, _svg;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      icon = _ref.icon,
      _ref$classes = _ref.classes,
      classes = _ref$classes === undefined ? 'a-icon' : _ref$classes,
      _ref$pathPrefix = _ref.pathPrefix,
      pathPrefix = _ref$pathPrefix === undefined ? 'src--assets--icons--' : _ref$pathPrefix;

  // is intended to check on just true and false! do not rewrite as truly or falsy check
  var path = pathPrefix === true ? 'src--assets--icons--' : pathPrefix;
  var _pathPrefix = pathPrefix === false ? '' : path;
  return _svg = document.createElementNS(_svgNamespace, 'svg'), _svg.setAttribute('class', '' + String(classes) + ''), _appendChild(_svg, ['\n      ', (_use = document.createElementNS(_svgNamespace, 'use'), _use.setAttributeNS(_xlinkNamespace, 'xlink:href', '#' + String(_pathPrefix) + '' + String(icon) + ''), _use.setAttribute('href', '#' + String(_pathPrefix) + '' + String(icon) + ''), _use), '\n    ']), _svg;
});