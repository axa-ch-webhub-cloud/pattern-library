import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default function (_ref, childrenFragment) {
  var _classnames, _;

  var _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'button' : _ref$tag,
      color = _ref.color,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '#' : _ref$href,
      size = _ref.size,
      ghost = _ref.ghost,
      classes = _ref.classes,
      motion = _ref.motion,
      gpu = _ref.gpu,
      arrow = _ref.arrow,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? '' : _ref$icon;

  var buttonClasses = classnames('m-button', 'js-button', classes, (_classnames = {}, babelHelpers.defineProperty(_classnames, 'm-button--' + color, color), babelHelpers.defineProperty(_classnames, 'm-button--' + size, size), babelHelpers.defineProperty(_classnames, 'm-button--ghost', ghost), babelHelpers.defineProperty(_classnames, 'm-button--motion', motion), babelHelpers.defineProperty(_classnames, 'm-button--gpu', gpu), babelHelpers.defineProperty(_classnames, 'm-button--arrow', arrow), babelHelpers.defineProperty(_classnames, 'm-button--generic-icon', icon && !arrow), _classnames));

  var arrowIcon = void 0;
  var genericIcon = void 0;
  if (arrow) {
    arrowIcon = raw('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>');
  } else if (icon) {
    genericIcon = raw('<axa-icon icon="' + icon + '" classes="m-button__icon"></axa-icon>');
  }

  if (tag.toLowerCase() === 'a') {
    var _a;

    return _a = document.createElement('a'), _a.setAttribute('href', '' + String(href) + ''), _a.setAttribute('class', '' + String(buttonClasses) + ''), _appendChild(_a, ['\n      ', childrenFragment, '\n      ', arrowIcon || genericIcon, '\n    ']), _a;
  }

  return _ = document.createElement('button'), _.setAttribute('type', 'button'), _.setAttribute('class', '' + String(buttonClasses) + ''), _appendChild(_, ['\n      ', childrenFragment, '\n      ', arrowIcon || genericIcon, '\n    ']), _;
}