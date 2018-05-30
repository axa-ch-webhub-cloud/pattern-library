import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default function (_ref) {
  var _mFooterLanguagesList, _mFooterLanguagesBox, _mFooterLanguagesTitle;

  var title = _ref.title,
      items = _ref.items,
      short = _ref.short;

  return _mFooterLanguagesBox = document.createElement('aside'), _mFooterLanguagesBox.setAttribute('class', 'm-footer-languages__box'), _appendChild(_mFooterLanguagesBox, ['\n    ', title && (_mFooterLanguagesTitle = document.createElement('strong'), _mFooterLanguagesTitle.setAttribute('class', 'm-footer-languages__title'), _appendChild(_mFooterLanguagesTitle, [title]), _mFooterLanguagesTitle), '\n\n    ', (_mFooterLanguagesList = document.createElement('ul'), _mFooterLanguagesList.setAttribute('class', 'm-footer-languages__list'), _appendChild(_mFooterLanguagesList, ['\n      ', Array.isArray(items) && items.map(function (_ref2) {
    var _a, _mFooterLanguagesListItem;

    var name = _ref2.name,
        _ref2$code = _ref2.code,
        code = _ref2$code === undefined ? 'en' : _ref2$code,
        _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? '' : _ref2$url,
        isActive = _ref2.isActive;
    return _mFooterLanguagesListItem = document.createElement('li'), _mFooterLanguagesListItem.setAttribute('class', 'm-footer-languages__list-item'), _appendChild(_mFooterLanguagesListItem, ['\n          ', (_a = document.createElement('a'), _a.setAttribute('href', '' + String(url) + ''), _a.setAttribute('lang', '' + String(code) + ''), _a.setAttribute('class', '' + String(classnames('m-footer-languages__link', {
      'is-footer-languages-active': isActive
    })) + ''), _appendChild(_a, [short ? code : name]), _a), '\n        ']), _mFooterLanguagesListItem;
  }), '\n    ']), _mFooterLanguagesList), '\n  ']), _mFooterLanguagesBox;
}