import bel from 'bel';

export default ({ items }) => bel`
  <nav class="m-header-meta-navigation-mobile__nav-lang">
    ${items && items.map(({ code, url, isActive }) => bel`
      <a href="${url}" class="m-header-meta-navigation-mobile__lang-link ${isActive && 'is-active'}">${code}</a>`)}
  </nav>
`;
