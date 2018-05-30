import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';

export default (function () {
  var _mHeaderLogoLink, _mHeaderLogoImg;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      src = _ref.src,
      _ref$alt = _ref.alt,
      alt = _ref$alt === undefined ? 'AXA Logo' : _ref$alt,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '#' : _ref$href;

  return _mHeaderLogoLink = document.createElement('a'), _mHeaderLogoLink.setAttribute('href', '' + String(href) + ''), _mHeaderLogoLink.setAttribute('class', 'm-header-logo__link js-header-logo__link'), _appendChild(_mHeaderLogoLink, ['\n    ', src ? (_mHeaderLogoImg = document.createElement('img'), _mHeaderLogoImg.setAttribute('src', '' + String(src) + ''), _mHeaderLogoImg.setAttribute('alt', '' + String(alt) + ''), _mHeaderLogoImg.setAttribute('class', 'm-header-logo__img'), _mHeaderLogoImg) : raw('<axa-icon icon="logo-AXA" classes="m-header-logo__icon"></axa-icon>'), '\n  ']), _mHeaderLogoLink;
});