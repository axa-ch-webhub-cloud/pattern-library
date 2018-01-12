import bel from 'bel';

function mobileNavItem(item) {
  const { name, url, isActive, items } = item;
  const hasItems = !!items;
  const activeClass = isActive ? 'is-header-mobile-navigation-active' : '';

  /* eslint-disable indent */
  return bel`
    <li class="m-header-mobile-navigation__list-item">
      ${hasItems ? [bel`<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ${activeClass}">
          ${name}
          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(items, item),
      ] : bel`
        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link ${activeClass}"
           href="${url}">${name}</a>
      `}
    </li>
  `;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  return bel`
    <div class="m-header-mobile-navigation__nav ${!parent && 'js-header-mobile-navigation__nav'}">
      ${parent && bel`
        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">
          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-back"></axa-icon>
          ${parent.name}
        </button>
      `}
      <ul class="m-header-mobile-navigation__list">
        ${parent && mobileNavItem({ ...parent, name: 'index page', items: null })}
        ${items.map(mobileNavItem)}
      </ul>
    </div>
  `;
}

export default ({ items }) => mobileNav(items);
