import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default (function (_ref) {
  var _mHeaderMobileOthersList;

  var items = _ref.items;
  return _mHeaderMobileOthersList = document.createElement('ul'), _mHeaderMobileOthersList.setAttribute('class', 'm-header-mobile-others__list'), _appendChild(_mHeaderMobileOthersList, ['\n    ', Array.isArray(items) && items.map(function (_ref2) {
    var _a, _mHeaderMobileOthersListItem;

    var name = _ref2.name,
        _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? '' : _ref2$url,
        _ref2$isActive = _ref2.isActive,
        isActive = _ref2$isActive === undefined ? false : _ref2$isActive;
    return _mHeaderMobileOthersListItem = document.createElement('li'), _mHeaderMobileOthersListItem.setAttribute('class', 'm-header-mobile-others__list-item'), _appendChild(_mHeaderMobileOthersListItem, ['\n        ', (_a = document.createElement('a'), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('class', '' + String(classnames('m-header-mobile-others__link', 'js-header-mobile-close', {
      'is-header-mobile-others-active': isActive
    })) + ''), _appendChild(_a, [name]), _a), '\n      ']), _mHeaderMobileOthersListItem;
  }), '\n  ']), _mHeaderMobileOthersList;
});