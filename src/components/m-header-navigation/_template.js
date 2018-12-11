import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

export default ({ items, simplemenu, historyApi = false }, childrenFragment, wcNode) => {
  const submenuItem = ({ url = '', name = '', items: subItems, classes, isActive, hyphenate = false }, index) => html`
    <li class="m-header-navigation__list-item" id="${getNodeId(wcNode, name, index)}">
      <a data-prevent-default class="${classnames('m-header-navigation__list-link', classes, {
          'js-header-navigation__list-link': (items || !!simplemenu),
          'js-header-navigation__list-link-history': (!!historyApi),
          'is-header-navigation-active': isActive,
          'm-header-navigation__list-link--hyphenate': hyphenate,
        })}" href="${url}">${raw(name)}</a>
        ${Array.isArray(subItems) ? html`<axa-header-sub-navigation index-title="${name}" index-url="${url}" items='${JSON.stringify(subItems)}' flyout>
        </axa-header-sub-navigation>` : ''}
    </li>
  `;

  return html`
    <ul class="m-header-navigation__list js-header-navigation__list">
      ${Array.isArray(items) && items.map(item => submenuItem(item))}
    </ul>
  `;
};
