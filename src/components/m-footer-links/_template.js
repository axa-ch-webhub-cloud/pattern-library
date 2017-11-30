import bel from 'bel';
import raw from 'bel/raw';
import chunk from '../../js/array-chunk';

const arrowIcon = '<axa-icon id="angle-bracket-right" classes="m-footer-links__category__icon"></axa-icon>';

export default function ({ title, items, cols = 1 }) {
  return bel`<div class="m-footer-links__block js-dropdown">
    <strong class="m-footer-links__category js-dropdown__toggle">${title}${raw(arrowIcon)}</strong>

    <div class="m-footer-links__cols m-footer-links__cols-${cols}">
      ${chunk(items, cols).map(col => bel`
        <ul class="m-footer-links__list">
          ${col.map(({ name, url }) => bel`
            <li class="m-footer-links__list-item">
              <a class="m-footer-links__link" href="${url}">${name}</a>
            </li>
          `)}
        </ul>
      `)}
    </div>
  </div>`;
}
