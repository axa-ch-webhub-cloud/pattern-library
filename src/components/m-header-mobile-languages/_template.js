import html from 'nanohtml/lib/browser';

export default ({ items }) => items && items.map(({ code, url, isActive }) => html`
  <a href="${url}" class="m-header-mobile-languages__link js-header-mobile-close ${isActive && 'is-header-mobile-languages-active'}">${code}</a>
`);
