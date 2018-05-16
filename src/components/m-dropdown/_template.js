import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

const arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const nativeSelect = ({ value, items, size }) => html`<div class="${classnames('m-dropdown__select-wrap', {
    [`m-dropdown__select-wrap--${size}`]: size,
  })}" tabindex="0">
    <select class="${classnames('m-dropdown__select', {
      [`m-dropdown__select--${size}`]: size,
    })}">
      ${Array.isArray(items) && items.map(({ name, value: itemValue, url }) => html`<option value="${itemValue}" data-url="${url}" ${itemValue === value ? 'selected' : ''}>${name}</option>`)}
    </select>
    <div class="${classnames('m-dropdown__select-icon', {
      [`m-dropdown__select-icon--${size}`]: size,
    })}">${raw(arrowIcon)}</div>
  </div>`;

const enhancedSelect = ({ title, items, size }) => [
  html`<button type="button" class="${classnames('m-dropdown__toggle js-dropdown__toggle', {
    [`m-dropdown__toggle--${size}`]: size,
  })}">
    ${title}${raw(arrowIcon)}
  </button>`,
  html`<ul class="m-dropdown__content">
    ${Array.isArray(items) && items.map(({ name, url }) => html`
      <li class="m-dropdown__item">
        <a class="m-dropdown__link" href="${url}">${name}</a>
      </li>
    `)}
  </ul>`,
];

// eslint-disable-next-line no-confusing-arrow
export default ({ native, ...props }) => native ? nativeSelect(props) : enhancedSelect(props);
