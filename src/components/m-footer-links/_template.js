import bel from 'bel';

export default function ({ items }) {
  return bel`<div class="m-footer-links__row">
  ${items.map(({ title, items }) => bel`<div class="m-footer-links__block">
    <strong class="m-footer-links__category">${title}</strong>
    <ul class="m-footer-links__list">
      ${items.map(({ name, url }) => bel`
        <li class="m-footer-links__list-item">
          <a href="${url}">${name}</a>
        </li>
      `)}
    </ul>
  </div>`)}
</div>`;
}
