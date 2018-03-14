import bel from 'bel';
import raw from 'bel/raw';

const arrowIcon = '<axa-icon id="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const nativeSelect = ({ items, size }) => bel`<div class="m-dropdown__select-wrap ${size === 'sm' ? 'm-dropdown__select-wrap--small' : ''}" tabindex="0">
    <select class="m-dropdown__select ${size === 'sm' ? 'm-dropdown__select--small' : ''}">
      ${items && items.map(({ name, url }) => bel`
        <option data-url="${url}">${name}</option>
      `)}
    </select>
    <div class="m-dropdown__select-icon ${size === 'sm' ? 'm-dropdown__select-icon--small' : ''}">${raw(arrowIcon)}</div>
  </div>`;

const enhancedSelect = ({ title, items, size }) => [
  bel`<button type="button" class="m-dropdown__toggle js-dropdown__toggle ${size === 'sm' ? 'm-dropdown__toggle--small' : ''}">
    ${title}${raw(arrowIcon)}
  </button>`,
  bel`<ul class="m-dropdown__content">
    ${items && items.map(({ name, url }) => bel`
      <li class="m-dropdown__item">
        <a class="m-dropdown__link" href="${url}">${name}</a>
      </li>
    `)}
  </ul>`,
];

// eslint-disable-next-line no-confusing-arrow
export default ({ native, ...props }) => native ? nativeSelect(props) : enhancedSelect(props);
