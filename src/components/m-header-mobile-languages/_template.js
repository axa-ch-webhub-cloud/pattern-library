import html from 'nanohtml';

export default ({ items }) => Array.isArray(items) && items.map(({ code, url, isActive }) => html`
  <a href="${url}" class="m-header-mobile-languages__link js-header-mobile-close ${isActive && 'is-header-mobile-languages-active'}">${code}</a>
`);
