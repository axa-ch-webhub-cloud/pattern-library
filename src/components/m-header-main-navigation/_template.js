import bel from 'bel';
import raw from 'bel/raw';

const writeClasses = classes => classes ? ` ${classes}` : ''; // eslint-disable-line no-confusing-arrow

export default ({ items, customsearch }, childrens) => [
  bel`
  <div class="m-header-main-navigation__box">
    <div class="m-header-main-navigation__logo">
      <a href="#" class="m-header-main-navigation__logo-link">
        ${raw('<axa-icon id="logo-AXA" classes="m-header-main-navigation__logo-img"></axa-icon>')}
      </a>
    </div>

    <nav class="m-header-main-navigation__nav">
      <ul class="m-header-main-navigation__list js-header-main-navigation__list">
        ${items && items.map(({ url, name, submenu, classes }) => bel`
          ${submenu ? bel`
            <li class="m-header-main-navigation__list-item">
              <a class="m-header-main-navigation__list-link js-header-main-navigation__list-link" ${writeClasses(classes)} href="${url}">${raw(name)}</a>
                <axa-header-sub-navigation indextitle="${name}" indexurl="${url}" items='${JSON.stringify(submenu)}' flyout>
                </axa-header-sub-navigation>
            </li>
          ` : bel`
            <li class="m-header-main-navigation__list-item">
              <a class="m-header-main-navigation__list-link js-header-main-navigation__list-link${writeClasses(classes)}" href="${url}">
                ${raw(name)}
              </a>
            </li>
          `}
        `)}
      </ul>
    </nav>

    ${childrens}

    ${customsearch ? raw(customsearch) : bel`
      <form class="m-header-main-navigation__form">
        ${raw('<axa-icon id="search-left" classes="m-header-main-navigation__search-icon"></axa-icon>')}

        <input type="text" class="m-header-main-navigation__search" />
      </form>
    `}

    <button role="button" class="m-header-main-navigation__burger js-header-main-navigation__burger">
      ${raw('<axa-icon id="menu" classes="m-header-main-navigation__burger-icon"></axa-icon>')}

      ${raw('<axa-icon id="cross-gap" classes="m-header-main-navigation__close-icon"></axa-icon>')}
    </button>
  </div>
`,
];
