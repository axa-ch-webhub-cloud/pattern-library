import html from 'nanohtml';

import getNodeId from '../../js/get-node-id';

export default (props, { children }, wcNode) => html`
  <ul class="m-header-meta-right__list">
    ${Array.from(children).map((child, index) => html`
      <li class="m-header-meta-right__list-item" id="${getNodeId(wcNode, null, index)}">${child}</li>
    `)}
  </ul>
`;
