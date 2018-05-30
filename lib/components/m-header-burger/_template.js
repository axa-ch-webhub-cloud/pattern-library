import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';

export default (function () {
  var _mHeaderBurgerButton;

  return _mHeaderBurgerButton = document.createElement('button'), _mHeaderBurgerButton.setAttribute('type', 'button'), _mHeaderBurgerButton.setAttribute('class', 'm-header-burger__button js-header-burger__button'), _appendChild(_mHeaderBurgerButton, ['\n    ', raw('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'), '\n\n    ', raw('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'), '\n  ']), _mHeaderBurgerButton;
});