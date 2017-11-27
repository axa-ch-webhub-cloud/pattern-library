import bel from 'bel';

function mobileNavItem(item) {
  const hasItems = !!item.items;

  return bel`
    <li class="m-main-navigation-mobile__list-item">
      ${hasItems ? [bel`
        <button type="button" class="m-main-navigation-mobile__category js-main-navigation-mobile__category">
          ${item.name}
          <axa-icon id="angle-bracket-right" classes="m-main-navigation-mobile__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(item.items, item),
      ] : bel`
        <a href="${item.url}" class="m-main-navigation-mobile__list-link js-main-navigation-mobile__list-link">${item.name}</a>
      `}
    </li>
  `;
}
function mobileNav(items, parent) {
  return bel`
    <nav class="m-main-navigation-mobile__nav ${!parent && 'js-main-navigation-mobile__nav'}">
      ${parent && bel`
        <button type="button" class="m-main-navigation-mobile__back js-main-navigation-mobile__back">
          <axa-icon id="angle-bracket-right" classes="m-main-navigation-mobile__icon-back"></axa-icon>
          ${parent.name}
        </button>
      `}
      <ul class="m-main-navigation-mobile__list">
        ${mobileNavItem({ ...parent, name: 'index page', items: null })}
        ${items.map(mobileNavItem)}
      </ul>
    </nav>
  `;
}

export default ({ items }, children) => bel`
  <div class="m-main-navigation-mobile__box">
    ${mobileNav(items)}
    ${children}
  </div>
`;
