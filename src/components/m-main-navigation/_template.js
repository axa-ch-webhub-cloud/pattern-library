import bel from 'bel';
import raw from 'bel/raw';

export default ({ items }, childrens) => [
  bel`
  <div class="m-main-navigation__box">
    <div class="m-main-navigation__logo">
      <a href="#" class="m-main-navigation__logo-link">
        ${raw('<axa-icon id="logo-AXA" classes="m-main-navigation__logo-img"></axa-icon>')}
      </a>
    </div>

    <nav class="m-main-navigation__nav">
      <ul class="m-main-navigation__list js-main-navigation__list">
        ${items && items.map(({ url, name }) => bel`
          <li class="m-main-navigation__list-item">
            <a class="m-main-navigation__list-link js-main-navigation__list-link" href="${url}">${raw(name)}</a>
          </li>
        `)}
      </ul>
    </nav>

    ${childrens}

    <form class="m-main-navigation__form">
      ${raw('<axa-icon id="search-left" classes="m-main-navigation__search-icon"></axa-icon>')}

      <input type="text" class="m-main-navigation__search" />
    </form>

    <button role="button" class="m-main-navigation__burger js-main-navigation__burger">
      ${raw('<axa-icon id="menu" classes="m-main-navigation__burger-icon"></axa-icon>')}

      ${raw('<axa-icon id="cross-gap" classes="m-main-navigation__close-icon"></axa-icon>')}
    </button>
  </div>
`,
];
