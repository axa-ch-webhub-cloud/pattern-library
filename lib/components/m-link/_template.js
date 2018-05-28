import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default function (_ref, childrenFragment) {
  var _classnames, _a, _axaIcon, _axaIcon2, _axaIcon3;

  var color = _ref.color,
      size = _ref.size,
      motion = _ref.motion,
      arrow = _ref.arrow,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '#' : _ref$href,
      listed = _ref.listed,
      icon = _ref.icon,
      deco = _ref.deco;

  var classes = classnames('m-link', (_classnames = {}, babelHelpers.defineProperty(_classnames, 'm-link--' + color, color), babelHelpers.defineProperty(_classnames, 'm-link--' + size, size), babelHelpers.defineProperty(_classnames, 'm-link--motion', motion), babelHelpers.defineProperty(_classnames, 'm-link--arrow', arrow), babelHelpers.defineProperty(_classnames, 'm-link--listed', listed), babelHelpers.defineProperty(_classnames, 'm-link--icon', icon), babelHelpers.defineProperty(_classnames, 'm-link--deco', deco), _classnames));

  return _a = document.createElement('a'), _a.setAttribute('href', '' + String(href) + ''), _a.setAttribute('class', '' + String(classes) + ''), _appendChild(_a, ['\n      ', icon && (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', '' + String(icon) + ''), _axaIcon.setAttribute('classes', 'm-link__icon'), _axaIcon), '\n      ', listed && (_axaIcon2 = document.createElement('axa-icon'), _axaIcon2.setAttribute('icon', 'arrow'), _axaIcon2.setAttribute('classes', 'm-link__listed'), _axaIcon2), '\n      ', childrenFragment, '\n      ', arrow && (_axaIcon3 = document.createElement('axa-icon'), _axaIcon3.setAttribute('icon', 'arrow'), _axaIcon3.setAttribute('classes', 'm-link__arrow'), _axaIcon3), '\n    ']), _a;
}