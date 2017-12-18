import bel from 'bel';

export default ({ others, languages }) =>
  bel`<div class="m-header-meta-navigation-mobile__box">
    <nav class="m-header-meta-navigation-mobile__nav-other">
      <ul class="m-header-meta-navigation-mobile__list">
        ${others && others.map(({ name, url, isActive = false }) => bel`
          <li class="m-header-meta-navigation-mobile__list-item">
            <a href="${url}" class="m-header-meta-navigation-mobile__list-link ${isActive && 'is-active'}">${name}</a>
          </li>`)}
      </ul>
    </nav>
    
    <nav class="m-header-meta-navigation-mobile__nav-lang">
      ${languages && languages.map(({ code, url, isActive }) => bel`
        <a href="${url}" class="m-header-meta-navigation-mobile__lang-link ${isActive && 'is-active'}">${code}</a>`)}
    </nav>
  </div>`;
