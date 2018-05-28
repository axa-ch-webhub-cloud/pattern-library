import _setAttribute from 'nanohtml/lib/set-attribute';
import _appendChild from 'nanohtml/lib/append-child';

import raw from 'nanohtml/raw';
import classnames from 'classnames';

var arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

var nativeSelect = function nativeSelect(_ref) {
  var _select, _, _div, _mDropdownSelectOptionHidden;

  var title = _ref.title,
      items = _ref.items,
      size = _ref.size,
      value = _ref.value;
  return _div = document.createElement('div'), _div.setAttribute('tabindex', '0'), _div.setAttribute('class', '' + String(classnames('m-dropdown__select-wrap', babelHelpers.defineProperty({}, 'm-dropdown__select-wrap--' + size, size))) + ''), _appendChild(_div, ['\n    ', (_select = document.createElement('select'), _select.setAttribute('class', '' + String(classnames('m-dropdown__select', babelHelpers.defineProperty({}, 'm-dropdown__select--' + size, size))) + ''), _appendChild(_select, ['\n    ', title && (_mDropdownSelectOptionHidden = document.createElement('option'), _mDropdownSelectOptionHidden.setAttribute('value', ''), _mDropdownSelectOptionHidden.setAttribute('disabled', 'disabled'), _mDropdownSelectOptionHidden.setAttribute('hidden', 'hidden'), _mDropdownSelectOptionHidden.setAttribute('selected', 'selected'), _mDropdownSelectOptionHidden.setAttribute('class', 'm-dropdown__select-option--hidden'), _appendChild(_mDropdownSelectOptionHidden, [title]), _mDropdownSelectOptionHidden), '\n    ', Array.isArray(items) && items.map(function (_ref2) {
    var _option;

    var name = _ref2.name,
        itemValue = _ref2.value,
        url = _ref2.url;
    return _option = document.createElement('option'), _option.setAttribute('value', '' + String(itemValue) + ''), _option.setAttribute('data-url', '' + String(url) + ''), _setAttribute(_option, itemValue === value ? 'selected' : '', itemValue === value ? 'selected' : ''), _appendChild(_option, [name]), _option;
  }), '\n    ']), _select), '\n    ', (_ = document.createElement('div'), _.setAttribute('class', '' + String(classnames('m-dropdown__select-icon', babelHelpers.defineProperty({}, 'm-dropdown__select-icon--' + size, size))) + ''), _appendChild(_, [raw(arrowIcon)]), _), '\n  ']), _div;
};

var enhancedSelect = function enhancedSelect(_ref3) {
  var _button, _mDropdownContent;

  var title = _ref3.title,
      items = _ref3.items,
      size = _ref3.size;
  return [(_button = document.createElement('button'), _button.setAttribute('type', 'button'), _button.setAttribute('class', '' + String(classnames('m-dropdown__toggle js-dropdown__toggle', babelHelpers.defineProperty({}, 'm-dropdown__toggle--' + size, size))) + ''), _appendChild(_button, ['\n    ', title, raw(arrowIcon), '\n  ']), _button), (_mDropdownContent = document.createElement('ul'), _mDropdownContent.setAttribute('class', 'm-dropdown__content'), _appendChild(_mDropdownContent, ['\n    ', Array.isArray(items) && items.map(function (_ref4) {
    var _mDropdownLink, _mDropdownItem;

    var name = _ref4.name,
        url = _ref4.url;
    return _mDropdownItem = document.createElement('li'), _mDropdownItem.setAttribute('class', 'm-dropdown__item'), _appendChild(_mDropdownItem, ['\n        ', (_mDropdownLink = document.createElement('a'), _mDropdownLink.setAttribute('href', '' + String(url) + ''), _mDropdownLink.setAttribute('class', 'm-dropdown__link'), _appendChild(_mDropdownLink, [name]), _mDropdownLink), '\n      ']), _mDropdownItem;
  }), '\n  ']), _mDropdownContent)];
};

// eslint-disable-next-line no-confusing-arrow
export default (function (_ref5) {
  var native = _ref5.native,
      props = babelHelpers.objectWithoutProperties(_ref5, ['native']);
  return native ? nativeSelect(props) : enhancedSelect(props);
});