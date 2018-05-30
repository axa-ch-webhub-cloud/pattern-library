import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default (function (_ref) {
  var _axaIcon, _mHeaderLanguagesDropDownToggle, _mHeaderLanguagesList;

  var items = _ref.items;
  return [(_mHeaderLanguagesDropDownToggle = document.createElement('button'), _mHeaderLanguagesDropDownToggle.setAttribute('type', 'button'), _mHeaderLanguagesDropDownToggle.setAttribute('class', 'm-header-languages__drop-down-toggle js-dropdown__toggle'), _appendChild(_mHeaderLanguagesDropDownToggle, ['\n    ', Array.isArray(items) && items[0].name, '\n    ', (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', 'angle-bracket-down'), _axaIcon.setAttribute('classes', 'm-header-languages__drop-down-icon'), _axaIcon), '\n  ']), _mHeaderLanguagesDropDownToggle), (_mHeaderLanguagesList = document.createElement('ul'), _mHeaderLanguagesList.setAttribute('class', 'm-header-languages__list'), _appendChild(_mHeaderLanguagesList, ['\n    ', Array.isArray(items) && items.map(function (_ref2) {
    var _a, _mHeaderLanguagesListItem;

    var _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? '' : _ref2$url,
        name = _ref2.name,
        isActive = _ref2.isActive;
    return _mHeaderLanguagesListItem = document.createElement('li'), _mHeaderLanguagesListItem.setAttribute('class', 'm-header-languages__list-item'), _appendChild(_mHeaderLanguagesListItem, ['\n        ', (_a = document.createElement('a'), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('class', '' + String(classnames('m-header-languages__list-link', {
      'is-header-languages-active': isActive
    })) + ''), _appendChild(_a, ['\n          ', raw(name), '\n        ']), _a), '\n      ']), _mHeaderLanguagesListItem;
  }), '\n  ']), _mHeaderLanguagesList)];
});