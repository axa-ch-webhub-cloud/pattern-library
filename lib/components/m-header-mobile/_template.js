import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default (function () {
  var _mHeaderMobileBackdrop, _mHeaderMobileBox, _div;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      offcanvas = _ref.offcanvas;

  var childrenFragment = arguments[1];
  return [(_mHeaderMobileBackdrop = document.createElement('div'), _mHeaderMobileBackdrop.setAttribute('class', 'm-header-mobile__backdrop js-header-mobile__backdrop'), _mHeaderMobileBackdrop), (_div = document.createElement('div'), _div.setAttribute('class', 'm-header-mobile__canvas js-header-mobile__canvas ' + String(classnames({
    'm-header-mobile__canvas--off-canvas': !offcanvas
  })) + ''), _appendChild(_div, ['\n    ', (_mHeaderMobileBox = document.createElement('div'), _mHeaderMobileBox.setAttribute('class', 'm-header-mobile__box'), _appendChild(_mHeaderMobileBox, ['\n      ', childrenFragment, '\n    ']), _mHeaderMobileBox), '\n  ']), _div)];
});