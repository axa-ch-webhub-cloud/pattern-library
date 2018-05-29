import _extends from 'babel-runtime/helpers/extends';
import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

function mobileNavItem(item) {
  var _mHeaderMobileNavigationListItem, _axaIcon, _button, _;

  var name = item.name,
      _item$url = item.url,
      url = _item$url === undefined ? '' : _item$url,
      isActive = item.isActive,
      items = item.items;

  var hasItems = !!items;
  var activeClass = {
    'is-header-mobile-navigation-active': isActive
  };
  var categoryClass = classnames('m-header-mobile-navigation__category', 'js-header-mobile-navigation__category', activeClass);
  var linkListClass = classnames('m-header-mobile-navigation__list-link', 'js-header-mobile-navigation__list-link', 'js-header-mobile-close', activeClass);

  /* eslint-disable indent */
  return _mHeaderMobileNavigationListItem = document.createElement('li'), _mHeaderMobileNavigationListItem.setAttribute('class', 'm-header-mobile-navigation__list-item'), _appendChild(_mHeaderMobileNavigationListItem, ['\n      ', hasItems ? [(_button = document.createElement('button'), _button.setAttribute('type', 'button'), _button.setAttribute('class', '' + String(categoryClass) + ''), _appendChild(_button, ['\n          ', name, '\n          ', (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', 'angle-bracket-down'), _axaIcon.setAttribute('classes', 'm-header-mobile-navigation__icon-next'), _axaIcon), '\n        ']), _button), mobileNav(items, item)] : (_ = document.createElement('a'), _.setAttribute('href', '' + String(url) + ''), _.setAttribute('class', '' + String(linkListClass) + ''), _appendChild(_, [name]), _), '\n    ']), _mHeaderMobileNavigationListItem;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  var _mHeaderMobileNavigationList, _div, _axaIcon2, _mHeaderMobileNavigationBack;

  return _div = document.createElement('div'), _div.setAttribute('class', '' + String(classnames('m-header-mobile-navigation__nav', {
    'js-header-mobile-navigation__nav': !parent
  })) + ''), _appendChild(_div, ['\n      ', parent && (_mHeaderMobileNavigationBack = document.createElement('button'), _mHeaderMobileNavigationBack.setAttribute('type', 'button'), _mHeaderMobileNavigationBack.setAttribute('class', 'm-header-mobile-navigation__back js-header-mobile-navigation__back'), _appendChild(_mHeaderMobileNavigationBack, ['\n          ', (_axaIcon2 = document.createElement('axa-icon'), _axaIcon2.setAttribute('icon', 'angle-bracket-down'), _axaIcon2.setAttribute('classes', 'm-header-mobile-navigation__icon-back'), _axaIcon2), '\n          ', parent.name, '\n        ']), _mHeaderMobileNavigationBack), '\n      ', (_mHeaderMobileNavigationList = document.createElement('ul'), _mHeaderMobileNavigationList.setAttribute('class', 'm-header-mobile-navigation__list'), _appendChild(_mHeaderMobileNavigationList, ['\n        ', parent && mobileNavItem(_extends({}, parent, { name: 'index page', items: null })), '\n        ', Array.isArray(items) && items.map(mobileNavItem), '\n      ']), _mHeaderMobileNavigationList), '\n    ']), _div;
}

export default (function (_ref) {
  var items = _ref.items;
  return mobileNav(items);
});