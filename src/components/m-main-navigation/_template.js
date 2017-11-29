import bel from 'bel';
import raw from 'bel/raw';

export default ({ items, customsearch }, childrens) => [
  bel`
  <div class="m-main-navigation__box">
    <div class="m-main-navigation__logo">
      <a href="#" class="m-main-navigation__logo-link">
        ${raw('<axa-icon id="logo-AXA" classes="m-main-navigation__logo-img"></axa-icon>')}
      </a>
    </div>

    <nav class="m-main-navigation__nav">
      <ul class="m-main-navigation__list js-main-navigation__list">
        ${items && items.map(({ url, name, subMenuIndexSettings, submenu }) => bel`
          ${submenu ? bel`
            <li class="m-main-navigation__list-item">
              <a class="m-main-navigation__list-link js-main-navigation__list-link" href="${url}">${raw(name)}</a>
                <axa-sub-navigation items='${JSON.stringify(submenu)}' flyout>
                  ${(subMenuIndexSettings && subMenuIndexSettings.title) ? raw(`
                    <a class="m-sub-navigation__index-link" href="#">${subMenuIndexSettings.title}</a>

                    <button type="button" class="m-sub-navigation__index-close js-sub-navigation__index-close">
                      ${subMenuIndexSettings.close}
                      <axa-icon id="cross-gap" classes="m-sub-navigation__index-close__icon"></axa-icon>
                    </button>
                    `) : ''}
                </axa-sub-navigation>
            </li>
          ` : bel`
            <li class="m-main-navigation__list-item">
              <a class="m-main-navigation__list-link js-main-navigation__list-link" href="${url}">${raw(name)}</a>
            </li>
          `}
        `)}
      </ul>
    </nav>

    ${childrens}

    ${customsearch ? raw(customsearch) : bel`
      <form class="m-main-navigation__form">
        ${raw('<axa-icon id="search-left" classes="m-main-navigation__search-icon"></axa-icon>')}

        <input type="text" class="m-main-navigation__search" />
      </form>
    `}

    <button role="button" class="m-main-navigation__burger js-main-navigation__burger">
      ${raw('<axa-icon id="menu" classes="m-main-navigation__burger-icon"></axa-icon>')}

      ${raw('<axa-icon id="cross-gap" classes="m-main-navigation__close-icon"></axa-icon>')}
    </button>
  </div>
`,
];
