import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default (function (_ref) {
  var items = _ref.items;
  return Array.isArray(items) && items.map(function (_ref2) {
    var _;

    var code = _ref2.code,
        url = _ref2.url,
        isActive = _ref2.isActive;
    return _ = document.createElement('a'), _.setAttribute('href', '' + String(url) + ''), _.setAttribute('class', '' + String(classnames('m-header-mobile-languages__link', 'js-header-mobile-close', {
      'is-header-mobile-languages-active': isActive
    })) + ''), _appendChild(_, [code]), _;
  });
});