import html from 'nanohtml/lib/browser';

function mobileNavItem(item) {
  const { name, url, isActive, items } = item;
  const hasItems = !!items;
  const activeClass = isActive ? 'is-header-mobile-navigation-active' : '';

  /* eslint-disable indent */
  return html`
    <li class="m-header-mobile-navigation__list-item">
      ${hasItems ? [html`<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ${activeClass}">
          ${name}
          <axa-icon icon="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(items, item),
      ] : html`
        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link js-header-mobile-close ${activeClass}"
           href="${url}">${name}</a>
      `}
    </li>
  `;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  return html`
    <div class="m-header-mobile-navigation__nav ${!parent && 'js-header-mobile-navigation__nav'}">
      ${parent && html`
        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">
          <axa-icon icon="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>
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
