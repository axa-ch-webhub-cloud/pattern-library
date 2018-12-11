import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

export default ({ items }, childrenFragment, wcNode) => html`
  <ul class="m-header-others__list">
    ${Array.isArray(items) && items.map(({ url, name, isActive }, index) => html`
      <li class="m-header-others__list-item" id="${getNodeId(wcNode, name, index)}">
        <a href="${url}" class="${classnames('m-header-others__list-link', {
          'is-header-others-active': isActive,
        })}">${raw(name)}</a>
      </li>
    `)}
  </ul>
`;
