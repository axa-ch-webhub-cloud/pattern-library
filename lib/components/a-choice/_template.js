import _appendChild from 'nanohtml/lib/append-child';

import BaseComponent from '../../js/abstract/base-component';

export default function (_ref, childrenFragment) {
  var _aChoiceInput, _aChoiceLabel, _aChoiceWrapper;

  var _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === undefined ? BaseComponent.uuidv4() : _ref$inputId,
      value = _ref.value,
      name = _ref.name,
      _ref$checked = _ref.checked,
      checked = _ref$checked === undefined ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  return _aChoiceWrapper = document.createElement('label'), _aChoiceWrapper.setAttribute('class', 'a-choice__wrapper'), _appendChild(_aChoiceWrapper, ['\n    ', (_aChoiceInput = document.createElement('input'), _aChoiceInput.setAttribute('id', '' + String(inputId) + ''), _aChoiceInput.setAttribute('type', 'radio'), _aChoiceInput.setAttribute('name', '' + String(name) + ''), checked && _aChoiceInput.setAttribute('checked', 'checked'), _aChoiceInput.setAttribute('value', '' + String(value) + ''), disabled && _aChoiceInput.setAttribute('disabled', 'disabled'), _aChoiceInput.setAttribute('class', 'a-choice__input'), _aChoiceInput), '\n      ', (_aChoiceLabel = document.createElement('span'), _aChoiceLabel.setAttribute('class', 'a-choice__label'), _appendChild(_aChoiceLabel, [childrenFragment]), _aChoiceLabel), '\n  ']), _aChoiceWrapper;
}