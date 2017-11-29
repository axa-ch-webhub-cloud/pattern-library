import bel from 'bel';

export default function ({ title, items }) {
  return bel`<aside class="m-footer-social__box">
    ${title && bel`<strong class="m-footer-social__title">${title}</strong>`}

    <ul class="m-footer-social__list">
      ${items.map(({ name, url }) => bel`
        <li class="m-footer-social__list-item">
          <a href="${url}" class="m-footer-social__link">
            <axa-icon id="${name}" classes="m-footer-social__icon"></axa-icon>
          </a>
        </li>
      `)}
    </ul>
  </aside>`;
}
