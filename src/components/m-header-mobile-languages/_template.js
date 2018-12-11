import html from 'nanohtml';
import classnames from 'classnames';

import getNodeId from '../../js/get-node-id';

export default ({ items }, childrenFragment, wcNode) => Array.isArray(items) && items.map(({ code, url, isActive }, index) => html`
  <a href="${url}" lang="${code}" class="${classnames(
    'm-header-mobile-languages__link',
    'js-header-mobile-languages__link',
    'js-header-mobile-close', {
      'is-header-mobile-languages-active': isActive,
    },
    )}" id="${getNodeId(wcNode, code, index)}">${code}</a>
`);
