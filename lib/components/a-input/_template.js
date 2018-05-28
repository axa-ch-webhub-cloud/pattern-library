import _appendChild from 'nanohtml/lib/append-child';

import BaseComponent from '../../js/abstract/base-component';

export default function (_ref) {
    var _, _aInputValidIcon, _aInputWrapper;

    var _ref$inputId = _ref.inputId,
        inputId = _ref$inputId === undefined ? BaseComponent.uuidv4() : _ref$inputId,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'text' : _ref$type,
        _ref$placeholder = _ref.placeholder,
        placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? '' : _ref$value,
        name = _ref.name,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled;

    return _aInputWrapper = document.createElement('div'), _aInputWrapper.setAttribute('class', 'a-input__wrapper'), _appendChild(_aInputWrapper, ['\n      ', (_ = document.createElement('input'), _.setAttribute('id', '' + String(inputId) + ''), _.setAttribute('name', '' + String(name) + ''), _.setAttribute('type', '' + String(type) + ''), _.setAttribute('placeholder', '' + String(placeholder) + ''), _.setAttribute('value', '' + String(value) + ''), disabled && _.setAttribute('disabled', 'disabled'), _.setAttribute('class', 'a-input__input'), _), '\n          ', (_aInputValidIcon = document.createElement('span'), _aInputValidIcon.setAttribute('class', 'a-input__valid-icon'), _aInputValidIcon), '\n    ']), _aInputWrapper;
}