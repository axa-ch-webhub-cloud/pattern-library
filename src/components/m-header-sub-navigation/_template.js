import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

// @TODO: proper behaviour still needs to be defined
const getColumnsCount = ({ length }) => {
  if (length === 2) {
    return length;
  } else if (length % 3 === 0 && length % 4 !== 0) {
    return 3;
  }

  return 4;
};

export default ({ items, indexUrl, indexTitle }, childrenFragment, wcNode) => {
  const linkItem = ({ url = '', name, isActive, preventDefault = 'false' }, index) => html`
    <li class="m-header-sub-navigation__list-item" in="${getNodeId(wcNode, name, index, 'link')}">
      <a data-prevent-default="${preventDefault}" class="${classnames('m-header-sub-navigation__link', 'js-header-navigation-close', {
      'is-header-sub-navigation-active': isActive,
    })}" href="${url}">${raw(name)}</a>
    </li>
  `;
  const rowItem = ({ columns, col, isWide }, rowIndex) => html`
    <div
      class="m-header-sub-navigation__row m-header-sub-navigation__row--col-${col || getColumnsCount(columns)}"
      id="${getNodeId(wcNode, null, rowIndex, 'row')}">
  
    ${Array.isArray(columns) && columns.map(({ links, title, url = '' }, colIndex) => html`
      <div class="${classnames('m-header-sub-navigation__block', {
      'm-header-sub-navigation__block--wide': isWide,
    })}" id="${getNodeId(wcNode, null, colIndex, 'col')}">
        <strong class="m-header-sub-navigation__category">
          ${url ? html`<a class="m-header-sub-navigation__category__link" href="${url}">${title}</a>` : title}
        </strong>
  
        <ul class="m-header-sub-navigation__list">
          ${links && links.map(linkItem)}
        </ul>
      </div>
    `)}
    </div>
  `;
  const arr = [];

  if (Array.isArray(items)) {
    if (indexTitle && indexUrl) {
      arr.push(html`
        <div class="m-header-sub-navigation__index" id="${getNodeId(wcNode, 'sub-index', 0)}">
          <div class="m-header-sub-navigation__index-box">
            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="${indexUrl}">${indexTitle}</a>
            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">
              Close
              <axa-icon icon="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>
            </button>
          </div>
        </div>`);
    }

    arr.push(html`
      <div class="m-header-sub-navigation__box" id="${getNodeId(wcNode, 'sub-box', 0)}">
        ${items && items.map(rowItem)}
      </div>
    `);
  }

  return arr;
};
