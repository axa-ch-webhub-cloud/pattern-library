import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

var submenuItem = function submenuItem(_ref) {
  var _a, _mHeaderNavigationListItem, _axaHeaderSubNavigation;

  var _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      items = _ref.items,
      classes = _ref.classes,
      isActive = _ref.isActive,
      simplemenu = _ref.simplemenu,
      _ref$hyphenate = _ref.hyphenate,
      hyphenate = _ref$hyphenate === undefined ? false : _ref$hyphenate;
  return _mHeaderNavigationListItem = document.createElement('li'), _mHeaderNavigationListItem.setAttribute('class', 'm-header-navigation__list-item'), _appendChild(_mHeaderNavigationListItem, ['\n      ', (_a = document.createElement('a'), _a.setAttribute('data-prevent-default', 'data-prevent-default'), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('class', '' + String(classnames('m-header-navigation__list-link', classes, {
    'js-header-navigation__list-link': items || !!simplemenu,
    'is-header-navigation-active': isActive,
    'm-header-navigation__list-link--hyphenate': hyphenate
  })) + ''), _appendChild(_a, [raw(name)]), _a), '\n      ', Array.isArray(items) ? (_axaHeaderSubNavigation = document.createElement('axa-header-sub-navigation'), _axaHeaderSubNavigation.setAttribute('index-title', '' + String(name) + ''), _axaHeaderSubNavigation.setAttribute('index-url', '' + String(url) + ''), _axaHeaderSubNavigation.setAttribute('items', '' + String(JSON.stringify(items)) + ''), _axaHeaderSubNavigation.setAttribute('flyout', 'flyout'), _appendChild(_axaHeaderSubNavigation, ['\n        ']), _axaHeaderSubNavigation) : '', '\n    ']), _mHeaderNavigationListItem;
};

export default (function (_ref2) {
  var _mHeaderNavigationList;

  var items = _ref2.items,
      simplemenu = _ref2.simplemenu;
  return _mHeaderNavigationList = document.createElement('ul'), _mHeaderNavigationList.setAttribute('class', 'm-header-navigation__list js-header-navigation__list'), _appendChild(_mHeaderNavigationList, ['\n    ', Array.isArray(items) && items.map(function (item) {
    return submenuItem(babelHelpers.extends({}, item, { simplemenu: simplemenu }));
  }), '\n  ']), _mHeaderNavigationList;
});