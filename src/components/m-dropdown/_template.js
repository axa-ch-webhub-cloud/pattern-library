import html from 'nanohtml';
import raw from 'nanohtml/raw';

const arrowIcon = '<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const nativeSelect = ({ items, size }) => html`<div class="m-dropdown__select-wrap ${size && `m-dropdown__select-wrap--${size}`}" tabindex="0">
    <select class="m-dropdown__select ${size && `m-dropdown__select--${size}`}">
      ${items && items.map(({ name, url }) => html`
        <option data-url="${url}">${name}</option>
      `)}
    </select>
    <div class="m-dropdown__select-icon ${size && `m-dropdown__select-icon--${size}`}">${raw(arrowIcon)}</div>
  </div>`;

const enhancedSelect = ({ title, items, size }) => [
  html`<button type="button" class="m-dropdown__toggle js-dropdown__toggle ${size && `m-dropdown__toggle--${size}`}">
    ${title}${raw(arrowIcon)}
  </button>`,
  html`<ul class="m-dropdown__content">
    ${items && items.map(({ name, url }) => html`
      <li class="m-dropdown__item">
        <a class="m-dropdown__link" href="${url}">${name}</a>
      </li>
    `)}
  </ul>`,
];

// eslint-disable-next-line no-confusing-arrow
export default ({ native, ...props }) => native ? nativeSelect(props) : enhancedSelect(props);
