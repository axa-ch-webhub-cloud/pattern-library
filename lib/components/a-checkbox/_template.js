import _appendChild from 'nanohtml/lib/append-child';

import BaseComponent from '../../js/abstract/base-component';

export default function (_ref, childrenFragment) {
  var _aCheckboxInput, _aCheckboxIcon, _aCheckboxWrapper;

  var _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === undefined ? BaseComponent.uuidv4() : _ref$inputId,
      value = _ref.value,
      name = _ref.name,
      _ref$checked = _ref.checked,
      checked = _ref$checked === undefined ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  return _aCheckboxWrapper = document.createElement('label'), _aCheckboxWrapper.setAttribute('class', 'a-checkbox__wrapper'), _appendChild(_aCheckboxWrapper, ['\n    ', (_aCheckboxInput = document.createElement('input'), _aCheckboxInput.setAttribute('id', '' + String(inputId) + ''), _aCheckboxInput.setAttribute('type', 'checkbox'), _aCheckboxInput.setAttribute('name', '' + String(name) + ''), checked && _aCheckboxInput.setAttribute('checked', 'checked'), _aCheckboxInput.setAttribute('value', '' + String(value) + ''), disabled && _aCheckboxInput.setAttribute('disabled', 'disabled'), _aCheckboxInput.setAttribute('class', 'a-checkbox__input'), _aCheckboxInput), '\n    ', (_aCheckboxIcon = document.createElement('span'), _aCheckboxIcon.setAttribute('class', 'a-checkbox__icon'), _aCheckboxIcon), childrenFragment, '\n  ']), _aCheckboxWrapper;
}