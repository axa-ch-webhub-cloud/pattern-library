import bel from 'bel';
import raw from 'bel/raw';

const arrowIcon = '<axa-icon id="angle-bracket-right" classname="m-dropdown__icon"></axa-icon>';

export default ({ title, items }) => [
  bel`<button role="button" class="m-dropdown__toggle js-dropdown__toggle">
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
