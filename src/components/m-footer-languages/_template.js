import bel from 'bel';

export default function ({ title, items, inline }, children) {
  return bel`<aside class="m-footer-languages__box">
    <strong class="m-footer-languages__title">${title}</strong>
    
    <ul class="m-footer-languages__list">
      ${items.map(({ name, short, url }) => bel`
        <li class="m-footer-languages__list-item">
          <a class="m-footer-languages__link" href="${url}" lang="${short}">${name}</a>
        </li>
      `)}
    </ul>
  </aside>
`;
}
