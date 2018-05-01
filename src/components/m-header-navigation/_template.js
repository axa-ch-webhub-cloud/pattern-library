import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

const submenuItem = ({ url = '', name = '', items, classes, isActive, simplemenu, hyphenate = false }) => html`
    <li class="m-header-navigation__list-item">
      <a data-prevent-default class="${classnames('m-header-navigation__list-link', classes, {
        'js-header-navigation__list-link': (items || !!simplemenu),
        'is-header-navigation-active': isActive,
        'm-header-navigation__list-link--hyphenate': hyphenate,
      })}" href="${url}">${raw(name)}</a>
      ${Array.isArray(items) ? html`<axa-header-sub-navigation index-title="${name}" index-url="${url}" items='${JSON.stringify(items)}' flyout>
        </axa-header-sub-navigation>` : ''}
    </li>
`;

export default ({ items, simplemenu }) => html`
  <ul class="m-header-navigation__list js-header-navigation__list">
    ${Array.isArray(items) && items.map(item => submenuItem({ ...item, simplemenu }))}
  </ul>
`;
