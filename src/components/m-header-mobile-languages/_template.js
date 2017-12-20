import bel from 'bel';

export default ({ items }) => bel`
  <nav class="m-header-mobile-languages__nav">
    ${items && items.map(({ code, url, isActive }) => bel`
      <a href="${url}" class="m-header-mobile-languages__link ${isActive && 'is-active'}">${code}</a>`)}
  </nav>
`;
