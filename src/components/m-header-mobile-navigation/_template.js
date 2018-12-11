import html from 'nanohtml';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

function mobileNav(items, parent, wcNode) {
  return html`
    <div class="${classnames('m-header-mobile-navigation__nav', {
      'js-header-mobile-navigation__nav': !parent,
    })}">
      ${parent && html`
        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">
          <axa-icon icon="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>
          ${parent.name}
        </button>
      `}
      <ul class="m-header-mobile-navigation__list">
        ${parent && mobileNavItem({ ...parent, name: 'index page', items: null }, 'parent')}
        ${Array.isArray(items) && items.map(mobileNavItem)}
      </ul>
    </div>
  `;

  function mobileNavItem(item, index) {
    const { name, url = '', isActive, items: subItems } = item;
    const hasItems = !!subItems;
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
    <li class="m-header-mobile-navigation__list-item" id="${getNodeId(wcNode, name, index)}">
      ${hasItems ? [html`<button type="button" class="${categoryClass}">
          ${name}
          <axa-icon icon="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>
        </button>
        `,
      mobileNav(subItems, item, wcNode),
    ] : html`
        <a class="${linkListClass}"
           href="${url}">${name}</a>
      `}
    </li>
  `;
    /* eslint-enable indent */
  }
}

export default ({ items }, childrenFragment, wcNode) => mobileNav(items, null, wcNode);
