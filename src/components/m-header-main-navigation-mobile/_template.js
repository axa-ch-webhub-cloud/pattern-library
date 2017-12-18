import bel from 'bel';
import classnames from 'classnames';

function mobileNavItem(item) {
  const hasItems = !!item.items;

  /* eslint-disable indent */
  return bel`
    <li class="m-header-main-navigation-mobile__list-item">
      ${hasItems ? [bel`<button type="button" class="m-header-main-navigation-mobile__category js-header-main-navigation-mobile__category">
          ${item.name}
          <axa-icon id="angle-bracket-right" classes="m-header-main-navigation-mobile__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(item.items, item),
      ] : bel`
        <a href="${item.url}" class="m-header-main-navigation-mobile__list-link js-header-main-navigation-mobile__list-link">${item.name}</a>
      `}
    </li>
  `;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  return bel`
    <nav class="m-header-main-navigation-mobile__nav ${!parent && 'js-header-main-navigation-mobile__nav'}">
      ${parent && bel`
        <button type="button" class="m-header-main-navigation-mobile__back js-header-main-navigation-mobile__back">
          <axa-icon id="angle-bracket-right" classes="m-header-main-navigation-mobile__icon-back"></axa-icon>
          ${parent.name}
        </button>
      `}
      <ul class="m-header-main-navigation-mobile__list">
        ${parent && mobileNavItem({ ...parent, name: 'index page', items: null })}
        ${items.map(mobileNavItem)}
      </ul>
    </nav>
  `;
}

export default ({ items, offcanvas }, children) => [bel`<div class="m-header-main-navigation-mobile__backdrop js-m-header-main-navigation-mobile__backdrop"></div>`,
  bel`<div class="m-header-main-navigation-mobile__canvas js-header-main-navigation-mobile__canvas ${classnames({
    'm-header-main-navigation-mobile__canvas--off-canvas': !offcanvas,
  })}">
    <div class="m-header-main-navigation-mobile__box">
      ${mobileNav(items)}
      ${children}
    </div>
  </div>
`];
