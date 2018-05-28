import _appendChild from 'nanohtml/lib/append-child';

import BaseComponent from '../../js/abstract/base-component';

export default function (_ref, childrenFragment) {
  var _aRadioInput, _aRadioIcon, _aRadioWrapper;

  var _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === undefined ? BaseComponent.uuidv4() : _ref$inputId,
      value = _ref.value,
      name = _ref.name,
      _ref$checked = _ref.checked,
      checked = _ref$checked === undefined ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  return _aRadioWrapper = document.createElement('label'), _aRadioWrapper.setAttribute('class', 'a-radio__wrapper'), _appendChild(_aRadioWrapper, ['\n    ', (_aRadioInput = document.createElement('input'), _aRadioInput.setAttribute('id', '' + String(inputId) + ''), _aRadioInput.setAttribute('type', 'radio'), _aRadioInput.setAttribute('name', '' + String(name) + ''), checked && _aRadioInput.setAttribute('checked', 'checked'), _aRadioInput.setAttribute('value', '' + String(value) + ''), disabled && _aRadioInput.setAttribute('disabled', 'disabled'), _aRadioInput.setAttribute('class', 'a-radio__input'), _aRadioInput), '\n    ', (_aRadioIcon = document.createElement('span'), _aRadioIcon.setAttribute('class', 'a-radio__icon'), _aRadioIcon), childrenFragment, '\n  ']), _aRadioWrapper;
}