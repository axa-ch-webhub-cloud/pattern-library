import bel from 'bel';

export default ({ items }) => items && items.map(({ code, url, isActive }) => bel`
  <a href="${url}" class="m-header-mobile-languages__link ${isActive && 'is-active'}">${code}</a>
`);
