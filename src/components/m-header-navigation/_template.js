import bel from 'bel';
import raw from 'bel/raw';

const writeClasses = classes => classes ? ` ${classes}` : ''; // eslint-disable-line no-confusing-arrow

const submenuItem = ({ url, name, items, classes, isActive }) => bel`
    <li class="m-header-navigation__list-item">
      <a class="m-header-navigation__list-link ${items ? 'js-header-navigation__list-link' : ''} ${isActive ? 'is-active' : ''} ${writeClasses(classes)}" href="${url}">${raw(name)}</a>

      ${items ? bel`<axa-header-sub-navigation indextitle="${name}" indexurl="${url}" items='${JSON.stringify(items)}' flyout>
        </axa-header-sub-navigation>` : ''}
    </li>
`;

export default ({ items }) => bel`
  <ul class="m-header-navigation__list js-header-navigation__list">
    ${items && items.map(submenuItem)}
  </ul>
`;
