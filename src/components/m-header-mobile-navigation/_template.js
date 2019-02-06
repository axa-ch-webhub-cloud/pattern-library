import html from 'nanohtml';
import classnames from 'classnames';

function mobileNavItem(item) {
  const { name, url = '', isActive, items } = item;
  const hasItems = !!items;
  const activeClass = {
    'is-header-mobile-navigation-active': isActive,
  };
  const categoryClass = classnames(
    'm-header-mobile-navigation__category',
    'js-header-mobile-navigation__category',
    activeClass,
  );
  const linkListClass = classnames(
    'm-header-mobile-navigation__list-link',
    'js-header-mobile-navigation__list-link',
    'js-header-mobile-close',
    activeClass,
  );

  /* eslint-disable indent */
  return html`
    <li class="m-header-mobile-navigation__list-item">
      ${hasItems ? [html`<button type="button" class="${categoryClass}">
          ${name}
          <axa-icon icon="angle-bracket-down" icon-class="a-icon__svg--small" classes="m-header-mobile-navigation__icon-next"></axa-icon>
        </button>
        `,
        mobileNav(items, item),
      ] : html`
        <a class="${linkListClass}"
           href="${url}">${name}</a>
      `}
    </li>
  `;
  /* eslint-enable indent */
}

function mobileNav(items, parent) {
  return html`
    <div class="${classnames('m-header-mobile-navigation__nav', {
      'js-header-mobile-navigation__nav': !parent,
    })}">
      ${parent && html`
        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">
          <axa-icon icon="angle-bracket-down" icon-class="a-icon__svg--small" classes="m-header-mobile-navigation__icon-back"></axa-icon>
          ${parent.name}
        </button>
      `}
      <ul class="m-header-mobile-navigation__list">
        ${parent && mobileNavItem({ ...parent, name: 'index page', items: null })}
        ${Array.isArray(items) && items.map(mobileNavItem)}
      </ul>
    </div>
  `;
}

export default ({ items }) => mobileNav(items);
