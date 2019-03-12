import html from 'nanohtml';
import raw from 'nanohtml/raw';

const arrowIcon = '<axa-icon icon="angle-bracket-down" icon-class="m-footer-links__category__icon"></axa-icon>';

export default function ({ title, items }) {
  return html`<div class="m-footer-links__block js-dropdown">
    <strong class="m-footer-links__category js-dropdown__toggle">${title}${raw(arrowIcon)}</strong>

    <ul class="m-footer-links__list">
      ${Array.isArray(items) && items.map(({ name, url, isActive }, index) => html`
        <li class="m-footer-links__list-item ${isActive ? 'is-footer-links__list-item-active' : ''}">
          <a class="m-footer-links__link js-footer-links__link" href="${url}" index="${index}">${name}</a>
        </li>
      `)}
    </ul>
  </div>`;
}
