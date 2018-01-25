import bel from 'bel';
import raw from 'bel/raw';

const arrowIcon = '<axa-icon id="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

const nativeSelect = ({ items }) => bel`<div class="m-dropdown__select-wrap" tabindex="0">
    <select class="m-dropdown__select">
      ${items && items.map(({ name, url }) => bel`
        <option data-url="${url}">${name}</option>
      `)}
    </select>
    <div class="m-dropdown__select-icon">${raw(arrowIcon)}</div>
  </div>`;

const enhancedSelect = ({ title, items }) => [
  bel`<button type="button" class="m-dropdown__toggle js-dropdown__toggle">
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
