import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

var linkItem = function linkItem(_ref) {
  var _a, _mHeaderSubNavigationListItem;

  var _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      name = _ref.name,
      isActive = _ref.isActive,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === undefined ? 'false' : _ref$preventDefault;
  return _mHeaderSubNavigationListItem = document.createElement('li'), _mHeaderSubNavigationListItem.setAttribute('class', 'm-header-sub-navigation__list-item'), _appendChild(_mHeaderSubNavigationListItem, ['\n    ', (_a = document.createElement('a'), _a.setAttribute('data-prevent-default', '' + String(preventDefault) + ''), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('class', '' + String(classnames('m-header-sub-navigation__link', 'js-header-navigation-close', {
    'is-header-sub-navigation-active': isActive
  })) + ''), _appendChild(_a, [raw(name)]), _a), '\n  ']), _mHeaderSubNavigationListItem;
};

// @TODO: proper behaviour still needs to be defined
var getColumnsCount = function getColumnsCount(_ref2) {
  var length = _ref2.length;

  if (length === 2) {
    return length;
  } else if (length % 3 === 0 && length % 4 !== 0) {
    return 3;
  }

  return 4;
};

var rowItem = function rowItem(_ref3) {
  var _div;

  var columns = _ref3.columns,
      col = _ref3.col,
      isWide = _ref3.isWide;
  return _div = document.createElement('div'), _div.setAttribute('class', 'm-header-sub-navigation__row m-header-sub-navigation__row--col-' + String(col || getColumnsCount(columns)) + ''), _appendChild(_div, ['\n\n  ', Array.isArray(columns) && columns.map(function (_ref4) {
    var _mHeaderSubNavigationCategory, _mHeaderSubNavigationList, _div2, _mHeaderSubNavigationCategoryLink;

    var links = _ref4.links,
        title = _ref4.title,
        _ref4$url = _ref4.url,
        url = _ref4$url === undefined ? '' : _ref4$url;
    return _div2 = document.createElement('div'), _div2.setAttribute('class', '' + String(classnames('m-header-sub-navigation__block', {
      'm-header-sub-navigation__block--wide': isWide
    })) + ''), _appendChild(_div2, ['\n      ', (_mHeaderSubNavigationCategory = document.createElement('strong'), _mHeaderSubNavigationCategory.setAttribute('class', 'm-header-sub-navigation__category'), _appendChild(_mHeaderSubNavigationCategory, ['\n        ', url ? (_mHeaderSubNavigationCategoryLink = document.createElement('a'), _mHeaderSubNavigationCategoryLink.setAttribute('href', '' + String(url) + ''), _mHeaderSubNavigationCategoryLink.setAttribute('class', 'm-header-sub-navigation__category__link'), _appendChild(_mHeaderSubNavigationCategoryLink, [title]), _mHeaderSubNavigationCategoryLink) : title, '\n      ']), _mHeaderSubNavigationCategory), '\n\n      ', (_mHeaderSubNavigationList = document.createElement('ul'), _mHeaderSubNavigationList.setAttribute('class', 'm-header-sub-navigation__list'), _appendChild(_mHeaderSubNavigationList, ['\n        ', links && links.map(linkItem), '\n      ']), _mHeaderSubNavigationList), '\n    ']), _div2;
  }), '\n  ']), _div;
};

export default (function (_ref5) {
  var items = _ref5.items,
      indexUrl = _ref5.indexUrl,
      indexTitle = _ref5.indexTitle;

  var arr = [];

  if (Array.isArray(items)) {
    var _mHeaderSubNavigationBox;

    if (indexTitle && indexUrl) {
      var _mHeaderSubNavigationIndexLink, _axaIcon, _mHeaderSubNavigationIndexClose, _mHeaderSubNavigationIndexBox, _mHeaderSubNavigationIndex;

      arr.push((_mHeaderSubNavigationIndex = document.createElement('div'), _mHeaderSubNavigationIndex.setAttribute('class', 'm-header-sub-navigation__index'), _appendChild(_mHeaderSubNavigationIndex, ['\n          ', (_mHeaderSubNavigationIndexBox = document.createElement('div'), _mHeaderSubNavigationIndexBox.setAttribute('class', 'm-header-sub-navigation__index-box'), _appendChild(_mHeaderSubNavigationIndexBox, ['\n            ', (_mHeaderSubNavigationIndexLink = document.createElement('a'), _mHeaderSubNavigationIndexLink.setAttribute('href', '' + String(indexUrl) + ''), _mHeaderSubNavigationIndexLink.setAttribute('class', 'm-header-sub-navigation__index-link js-header-navigation-close'), _appendChild(_mHeaderSubNavigationIndexLink, [indexTitle]), _mHeaderSubNavigationIndexLink), '\n            ', (_mHeaderSubNavigationIndexClose = document.createElement('button'), _mHeaderSubNavigationIndexClose.setAttribute('type', 'button'), _mHeaderSubNavigationIndexClose.setAttribute('class', 'm-header-sub-navigation__index-close js-header-navigation-close'), _appendChild(_mHeaderSubNavigationIndexClose, ['\n              Close\n              ', (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', 'cross-gap'), _axaIcon.setAttribute('classes', 'm-header-sub-navigation__index-close__icon'), _axaIcon), '\n            ']), _mHeaderSubNavigationIndexClose), '\n          ']), _mHeaderSubNavigationIndexBox), '\n        ']), _mHeaderSubNavigationIndex));
    }

    arr.push((_mHeaderSubNavigationBox = document.createElement('div'), _mHeaderSubNavigationBox.setAttribute('class', 'm-header-sub-navigation__box'), _appendChild(_mHeaderSubNavigationBox, ['\n        ', items && items.map(rowItem), '\n      ']), _mHeaderSubNavigationBox));
  }

  return arr;
});