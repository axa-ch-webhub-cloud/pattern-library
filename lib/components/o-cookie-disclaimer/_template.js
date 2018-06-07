import _appendChild from 'nanohtml/lib/append-child';


export default (function (_ref, childrenFragment) {
  var _oCookieDisclaimerTitle, _oCookieDisclaimerContainer, _axaButton, _oCookieDisclaimerContainer2, _axaContainer, _article;

  var classes = _ref.classes,
      buttonName = _ref.buttonName,
      title = _ref.title,
      _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === undefined ? false : _ref$fixed;
  return _article = document.createElement('article'), _article.setAttribute('class', '' + String(classes) + ' ' + String(fixed ? 'o-cookie-disclaimer--fixed' : '') + ''), _appendChild(_article, ['\n    ', (_axaContainer = document.createElement('axa-container'), _appendChild(_axaContainer, ['\n      ', (_oCookieDisclaimerContainer = document.createElement('div'), _oCookieDisclaimerContainer.setAttribute('class', 'o-cookie-disclaimer__container o-cookie-disclaimer__container--lx'), _appendChild(_oCookieDisclaimerContainer, ['\n        ', (_oCookieDisclaimerTitle = document.createElement('h1'), _oCookieDisclaimerTitle.setAttribute('class', 'o-cookie-disclaimer__title'), _appendChild(_oCookieDisclaimerTitle, [title]), _oCookieDisclaimerTitle), '\n        ', childrenFragment, '\n      ']), _oCookieDisclaimerContainer), '\n      ', (_oCookieDisclaimerContainer2 = document.createElement('div'), _oCookieDisclaimerContainer2.setAttribute('class', 'o-cookie-disclaimer__container o-cookie-disclaimer__container--rx'), _appendChild(_oCookieDisclaimerContainer2, ['\n        ', (_axaButton = document.createElement('axa-button'), _axaButton.setAttribute('ghost', 'ghost'), _axaButton.setAttribute('classes', 'js-cookie-disclaimer__button'), _axaButton.setAttribute('color', 'white'), _axaButton.setAttribute('tag', 'button'), _appendChild(_axaButton, [buttonName]), _axaButton), '\n      ']), _oCookieDisclaimerContainer2), '\n    ']), _axaContainer), '\n  ']), _article;
});