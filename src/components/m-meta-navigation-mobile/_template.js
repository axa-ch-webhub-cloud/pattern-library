import bel from 'bel';

export default ({ others, languages }) =>
  bel`<div class="m-meta-navigation-mobile__box">
    <nav class="m-meta-navigation-mobile__nav-other">
      <ul class="m-meta-navigation-mobile__list">
        ${others && others.map(({ name, url, isActive = false }) => bel`
          <li class="m-meta-navigation-mobile__list-item">
            <a href="${url}" class="m-meta-navigation-mobile__list-link ${isActive && 'is-active'}">${name}</a>
          </li>`)}
      </ul>
    </nav>
    
    <nav class="m-main-navigation-mobile__nav-lang">
      ${languages && languages.map(({ code, url, isActive }) => bel`
        <a href="${url}" class="m-meta-navigation-mobile__lang-link ${isActive && 'is-active'}">${code}</a>`)}
    </nav>
  </div>`;
