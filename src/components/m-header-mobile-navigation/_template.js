import bel from 'bel';
import classnames from 'classnames';

function mobileNavItem(item) {
  const hasItems = !!item.items;

  /* eslint-disable indent */
  return bel`
    <li class="m-header-mobile-navigation__list-item">
      ${hasItems ? [bel`<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category">
          ${item.name}
          <axa-icon id="angle-bracket-right" classes="m-header-mobile-navigation__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(item.items, item),
      ] : bel`
        <a href="${item.url}" class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link">${item.name}</a>
      `}
    </li>
  `;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  return bel`
    <nav class="m-header-mobile-navigation__nav ${!parent && 'js-header-mobile-navigation__nav'}">
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
    </nav>
  `;
}

export default ({ items, offcanvas }, children) => [bel`<div class="m-header-mobile-navigation__backdrop js-m-header-mobile-navigation__backdrop"></div>`,
  bel`<div class="m-header-mobile-navigation__canvas js-header-mobile-navigation__canvas ${classnames({
    'm-header-mobile-navigation__canvas--off-canvas': !offcanvas,
  })}">
    <div class="m-header-mobile-navigation__box">
      ${mobileNav(items)}
      ${children}
    </div>
  </div>
`];
