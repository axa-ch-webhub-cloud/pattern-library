import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _appendChild from 'nanohtml/lib/append-child';

import classnames from 'classnames';

export default (function (_ref, childrenFragment) {
  var _classnames, _axaIcon, _axaIcon2, _span, _mAccordionItemHeadingWrapper, _div, _mAccordionItemHeading, _mAccordionItemContent, _mAccordionItemBody;

  var header = _ref.header,
      headerSecondary = _ref.headerSecondary,
      headerColor = _ref.headerColor,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? '' : _ref$icon;

  var headerPrimaryClasses = classnames('m-accordion-item__heading', 'm-accordion-item__heading--primary', (_classnames = {}, _defineProperty(_classnames, 'm-accordion-item__heading--' + headerColor, headerColor), _defineProperty(_classnames, 'm-accordion-item__heading--with-secondary', headerSecondary), _classnames));
  var headerClasses = classnames('m-accordion-item__header', 'js-accordion-item__toggle', {
    'm-accordion-item__header--with-icon': icon
  });

  var iconToRender = (_axaIcon = document.createElement('axa-icon'), _axaIcon.setAttribute('icon', '' + String(icon) + ''), _axaIcon.setAttribute('classes', 'm-accordion-item__icon'), _axaIcon);
  var chevron = (_axaIcon2 = document.createElement('axa-icon'), _axaIcon2.setAttribute('icon', 'chevron-down'), _axaIcon2.setAttribute('classes', 'm-accordion-item__chevron'), _axaIcon2);

  return [(_div = document.createElement('div'), _div.setAttribute('class', '' + String(headerClasses) + ''), _appendChild(_div, ['\n          ', icon && iconToRender, '\n          ', (_mAccordionItemHeadingWrapper = document.createElement('div'), _mAccordionItemHeadingWrapper.setAttribute('class', 'm-accordion-item__heading-wrapper'), _appendChild(_mAccordionItemHeadingWrapper, ['\n            ', (_span = document.createElement('span'), _span.setAttribute('class', '' + String(headerPrimaryClasses) + ''), _appendChild(_span, [header]), _span), ' \n            ', headerSecondary && (_mAccordionItemHeading = document.createElement('span'), _mAccordionItemHeading.setAttribute('class', 'm-accordion-item__heading m-accordion-item__heading--secondary'), _appendChild(_mAccordionItemHeading, ['\n                      ', headerSecondary, '\n                ']), _mAccordionItemHeading), '\n          ']), _mAccordionItemHeadingWrapper), '\n          ', chevron, '\n        ']), _div), (_mAccordionItemBody = document.createElement('div'), _mAccordionItemBody.setAttribute('class', 'm-accordion-item__body js-accordion-item__body'), _appendChild(_mAccordionItemBody, ['\n          ', (_mAccordionItemContent = document.createElement('div'), _mAccordionItemContent.setAttribute('class', 'm-accordion-item__content'), _appendChild(_mAccordionItemContent, ['\n          ', childrenFragment, '\n          ']), _mAccordionItemContent), '\n        ']), _mAccordionItemBody)];
});