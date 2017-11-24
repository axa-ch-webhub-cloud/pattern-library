import bel from 'bel';
import raw from 'bel/raw';

const arrowIcon = `<svg class="m-dropdown__icon">
  <use xlink:href="#src--assets--icons--angle-bracket-right" />
</svg>
`;

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
