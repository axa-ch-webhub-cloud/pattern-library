import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';

export default function (_ref, childrenFragment) {
  var _mFormGroupLabel, _mFormGroupInfoButton, _mFormGroupLabelIconWrapper, _mFormGroupError, _mFormGroupWrapper, _mFormGroupInfoContent, _mFormGroupInfo;

  var _ref$label = _ref.label,
      label = _ref$label === undefined ? '' : _ref$label,
      _ref$info = _ref.info,
      info = _ref$info === undefined ? '' : _ref$info,
      _ref$error = _ref.error,
      error = _ref$error === undefined ? '' : _ref$error;

  var openIcon = raw('<axa-icon icon="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>');
  var closeIcon = raw('<axa-icon icon="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');

  return [(_mFormGroupWrapper = document.createElement('label'), _mFormGroupWrapper.setAttribute('class', 'm-form-group__wrapper js-form-group__wrapper'), _appendChild(_mFormGroupWrapper, [' \n        ', (_mFormGroupLabelIconWrapper = document.createElement('span'), _mFormGroupLabelIconWrapper.setAttribute('class', 'm-form-group__label-icon-wrapper js-form-group__label-icon-wrapper'), _appendChild(_mFormGroupLabelIconWrapper, ['\n          ', (_mFormGroupLabel = document.createElement('span'), _mFormGroupLabel.setAttribute('class', 'm-form-group__label'), _appendChild(_mFormGroupLabel, ['\n            ', label, '\n          ']), _mFormGroupLabel), '\n          ', (_mFormGroupInfoButton = document.createElement('a'), _mFormGroupInfoButton.setAttribute('tabindex', '0'), _mFormGroupInfoButton.setAttribute('role', 'button'), _mFormGroupInfoButton.setAttribute('class', 'm-form-group__info-button js-form-group-info__toggle'), _appendChild(_mFormGroupInfoButton, ['\n          ', closeIcon, '\n          ', openIcon, '\n          ']), _mFormGroupInfoButton), '\n        ']), _mFormGroupLabelIconWrapper), '\n        \n        ', childrenFragment, '\n        ', (_mFormGroupError = document.createElement('span'), _mFormGroupError.setAttribute('class', 'm-form-group__error'), _appendChild(_mFormGroupError, [error]), _mFormGroupError), '\n      ']), _mFormGroupWrapper), (_mFormGroupInfo = document.createElement('div'), _mFormGroupInfo.setAttribute('class', 'm-form-group__info js-form-group__info'), _appendChild(_mFormGroupInfo, ['\n          ', (_mFormGroupInfoContent = document.createElement('div'), _mFormGroupInfoContent.setAttribute('class', 'm-form-group__info-content'), _appendChild(_mFormGroupInfoContent, [info]), _mFormGroupInfoContent), '\n      ']), _mFormGroupInfo)];
}