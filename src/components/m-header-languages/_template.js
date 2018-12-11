import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

const getSelectedName = (value, items) => {
  if (!items || !Array.isArray(items) || !items.length) {
    return '';
  }
  const selectedItem = items.filter(item => item.name === value)[0];
  return selectedItem ? selectedItem.name : items[0].name;
};

export default ({ value, items }, childrenFragment, wcNode) => [html`
  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">
    ${getSelectedName(value, items)}
    <axa-icon icon="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>
  </button>
`, html`
  <ul class="m-header-languages__list js-dropdown__content">
    ${Array.isArray(items) && items.map(({ url = '', name, code = name, isActive }, index) => html`
      <li class="m-header-languages__list-item" id="${getNodeId(wcNode, code, index)}">
        <a
          data-index="${name}"
          data-selected="${name === value ? 'true' : 'false'}"
          class="${classnames('m-header-languages__list-link', 'js-header-languages__list-link', {
            'is-header-languages-active': isActive,
          })}"
          href="${url}"
          lang="${code}"
        >
          ${raw(name)}
        </a>
      </li>
    `)}
  </ul>
`];
