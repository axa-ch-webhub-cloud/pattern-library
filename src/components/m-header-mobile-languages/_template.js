import html from 'nanohtml';
import classnames from 'classnames';

export default ({ items }) => Array.isArray(items) && items.map(({ code, url, isActive }) => html`
  <a href="${url}" lang="${code}" data-language="${code}" class="${classnames(
    'm-header-mobile-languages__link',
    'js-header-mobile-languages__link',
    'js-header-mobile-close', {
      'is-header-mobile-languages-active': isActive,
    },
    )}">${code}</a>
`);
