import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

const arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const nativeSelect = ({ title, items, size }) => [
  html`
  <div class="${classnames('m-dropdown__select-wrap', {[`m-dropdown__select-wrap--${size}`]: size,})}" tabindex="0">
    <select class="${classnames('m-dropdown__select', 'js-dropdown__native-select', {
      [`m-dropdown__select--${size}`]: size,
    })}">
    ${title && html`<option value="" disabled hidden selected class="m-dropdown__select-option--hidden" >${title}</option>`}
    ${Array.isArray(items) && items.map(({ name, value, url, isSelected }) => {
        return html`<option value="${value}" data-url="${url}" ${isSelected ? 'selected' : ''}>${name}</option>`;
      })}
    </select>
    <div class="${classnames('m-dropdown__select-icon', {[`m-dropdown__select-icon--${size}`]: size,})}">${raw(arrowIcon)}</div>
  </div>`
];

const enhancedSelect = ({ title, items, size }) => [
  html`
  <button type="button" class="${classnames('m-dropdown__toggle js-dropdown__toggle', {[`m-dropdown__toggle--${size}`]: size,})}">
    ${title}${raw(arrowIcon)}
  </button>`,
  html`<ul class="m-dropdown__content js-dropdown__content">
    ${items && items.map(({ name, url, isSelected, value }, index) => {
    return html`
      <li class="m-dropdown__item">
        <a class="m-dropdown__link" data-name="${name}" data-index="${index}" data-value="${value}" data-selected="${isSelected ? 'true' : 'false'}" href="${url}">${name}</a>
      </li>
    `;
  })}
  </ul>`,
];

// eslint-disable-next-line no-confusing-arrow
export default ({ native, ...props }) => native ? nativeSelect(props) : enhancedSelect(props);
