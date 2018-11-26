import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

const arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const getItemValue = (itemValue, index) => itemValue === null || itemValue === undefined ? index : itemValue;

const nativeSelect = ({ title, items, size, value }) => html`<div class="${classnames('m-dropdown__select-wrap', {
    [`m-dropdown__select-wrap--${size}`]: size,
  })}" tabindex="0">
    <select class="${classnames('m-dropdown__select', 'js-dropdown__native-select', {
      [`m-dropdown__select--${size}`]: size,
    })}">
    ${title && html`<option value="" disabled hidden selected class="m-dropdown__select-option--hidden" >${title}</option>`}
    ${Array.isArray(items) &&
      items.map(({ name, value: itemValue, url }, index) => {
        const _itemValue = getItemValue(itemValue, index);
        return html`<option value="${_itemValue}" data-url="${url}" ${
          `${_itemValue}` === `${value}` ? 'selected' : ''
        }>${name}</option>`;
      })}
    </select>
    <div class="${classnames('m-dropdown__select-icon', {
      [`m-dropdown__select-icon--${size}`]: size,
    })}">${raw(arrowIcon)}</div>
  </div>`;

const getTitle = (value, items, title) => {
  if (!items) {
    return title || '';
  }
  const selected = items.filter((item, index) => {
    let { value: _value } = item;
    if (typeof _value === 'undefined') {
      _value = index;
    }
    return `${_value}` === `${value}`;
  });
  return selected.length === 1 ? selected[0].name : title;
};

const enhancedSelect = ({ title, items, size, value }) => [
  html`<button type="button" class="${classnames('m-dropdown__toggle js-dropdown__toggle', {
    [`m-dropdown__toggle--${size}`]: size,
  })}">
    ${getTitle(value, items, title) || ''}${raw(arrowIcon)}
  </button>`,
  html`<ul class="m-dropdown__content js-dropdown__content">
    ${Array.isArray(items) && items.map(({ name, url, value: itemValue }, index) => {
    const _itemValue = getItemValue(itemValue, index);
    return html`
      <li class="m-dropdown__item">
        <a class="m-dropdown__link" data-index="${_itemValue}" data-selected="${_itemValue === value ? 'true' : 'false'}" href="${url}">${name}</a>
      </li>
    `;
  })}
  </ul>`,
];

// eslint-disable-next-line no-confusing-arrow
export default ({ native, ...props }) => native ? nativeSelect(props) : enhancedSelect(props);
