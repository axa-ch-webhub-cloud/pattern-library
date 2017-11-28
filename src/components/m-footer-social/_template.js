import bel from 'bel';

export default function ({ title, items }, children) {
  return bel`<aside class="m-footer-social__box">
    <strong class="m-footer-social__title">${title}</strong>

    <ul class="m-footer-social__list">
      ${items.map(({ name, url }) => bel`
        <li class="m-footer-social-list-item">
          <a href="${url}" class="m-footer-social__link">
            <axa-icon id="${name}" classes="m-footer-social__icon"></axa-icon>
          </a>
        </li>
      `)}
    </ul>
  </aside>`;
}
