import bel from 'bel';
import raw from 'bel/raw';

const arrowIcon = '<axa-icon id="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';

export default function ({ title, items }) {
  return bel`<div class="m-footer-links__block js-dropdown">
    <strong class="m-footer-links__category js-dropdown__toggle">${title}${raw(arrowIcon)}</strong>

    <ul class="m-footer-links__list">
      ${items.map(({ name, url }) => bel`
        <li class="m-footer-links__list-item">
          <a class="m-footer-links__link" href="${url}">${name}</a>
        </li>
      `)}
    </ul>
  </div>`;
}
