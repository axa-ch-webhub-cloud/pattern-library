import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default (function (_ref) {
  var _mHeaderOthersList;

  var items = _ref.items;
  return _mHeaderOthersList = document.createElement('ul'), _mHeaderOthersList.setAttribute('class', 'm-header-others__list'), _appendChild(_mHeaderOthersList, ['\n    ', Array.isArray(items) && items.map(function (_ref2) {
    var _a, _mHeaderOthersListItem;

    var url = _ref2.url,
        name = _ref2.name,
        isActive = _ref2.isActive;
    return _mHeaderOthersListItem = document.createElement('li'), _mHeaderOthersListItem.setAttribute('class', 'm-header-others__list-item'), _appendChild(_mHeaderOthersListItem, ['\n        ', (_a = document.createElement('a'), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('class', '' + String(classnames('m-header-others__list-link', {
      'is-header-others-active': isActive
    })) + ''), _appendChild(_a, [raw(name)]), _a), '\n      ']), _mHeaderOthersListItem;
  }), '\n  ']), _mHeaderOthersList;
});