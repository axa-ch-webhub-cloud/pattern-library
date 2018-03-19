import html from 'nanohtml';

export default function ({ title, items, short }) {
  return html`<aside class="m-footer-languages__box">
    ${title && html`<strong class="m-footer-languages__title">${title}</strong>`}

    <ul class="m-footer-languages__list">
      ${items.map(({ name, code, url, isActive }) => html`
        <li class="m-footer-languages__list-item">
          <a class="m-footer-languages__link ${isActive ? 'is-footer-languages-active' : ''}" href="${url}" lang="${code}">${short ? code : name}</a>
        </li>
      `)}
    </ul>
  </aside>
`;
}
