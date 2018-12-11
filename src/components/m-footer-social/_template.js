import html from 'nanohtml';

import getNodeId from '../../js/get-node-id';

export default function ({ title, items = [] }, childrenFragment, wcNode) {
  return html`<aside class="m-footer-social__box">
    ${title && html`<strong class="m-footer-social__title">${title}</strong>`}

    <ul class="m-footer-social__list">
      ${Array.isArray(items) && items.map(({ name, url }, index) => html`
        <li class="m-footer-social__list-item" id="${getNodeId(wcNode, name, index)}">
          <a href="${url}" class="m-footer-social__link">
            <axa-icon icon="${name}" classes="m-footer-social__icon"></axa-icon>
          </a>
        </li>
      `)}
    </ul>
  </aside>`;
}
