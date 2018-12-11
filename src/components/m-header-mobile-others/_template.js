import html from 'nanohtml';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

export default ({ items }, childrenFragment, wcNode) => html`
  <ul class="m-header-mobile-others__list">
    ${Array.isArray(items) && items.map(({ name, url = '', isActive = false }, index) => html`
      <li class="m-header-mobile-others__list-item" id="${getNodeId(wcNode, name, index)}">
        <a href="${url}" class="${classnames('m-header-mobile-others__link', 'js-header-mobile-close', {
          'is-header-mobile-others-active': isActive,
        })}">${name}</a>
      </li>`)}
  </ul>
`;
