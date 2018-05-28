import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';

export default (function () {
  var _mHeaderSearchPageLink, _mHeaderSearchInput, _mHeaderSearchForm;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      action = _ref.action,
      href = _ref.href,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'POST' : _ref$method;

  return _mHeaderSearchForm = document.createElement('form'), _mHeaderSearchForm.setAttribute('action', '' + String(action) + ''), _mHeaderSearchForm.setAttribute('method', '' + String(method) + ''), _mHeaderSearchForm.setAttribute('class', 'm-header-search__form'), _appendChild(_mHeaderSearchForm, ['\n    ', (_mHeaderSearchPageLink = document.createElement('a'), _mHeaderSearchPageLink.setAttribute('href', '' + String(href) + ''), _mHeaderSearchPageLink.setAttribute('class', 'm-header-search__page-link'), _appendChild(_mHeaderSearchPageLink, ['\n      ', raw('<axa-icon icon="search-left" classes="m-header-search__icon"></axa-icon>'), '\n    ']), _mHeaderSearchPageLink), '\n\n    ', (_mHeaderSearchInput = document.createElement('input'), _mHeaderSearchInput.setAttribute('type', 'text'), _mHeaderSearchInput.setAttribute('placeholder', 'search...'), _mHeaderSearchInput.setAttribute('class', 'm-header-search__input'), _mHeaderSearchInput), '\n  ']), _mHeaderSearchForm;
});