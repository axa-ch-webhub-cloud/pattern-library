import bel from 'bel';
import raw from 'bel/raw';

const writeClasses = classes => classes ? ` ${classes}` : ''; // eslint-disable-line no-confusing-arrow

const submenuItem = ({ url, name, items, classes }) => bel`
  ${items ? bel`
    <li class="m-header-navigation__list-item">
      <a class="m-header-navigation__list-link js-header-navigation__list-link" ${writeClasses(classes)} href="${url}">${raw(name)}</a>
        <axa-header-sub-navigation indextitle="${name}" indexurl="${url}" items='${JSON.stringify(items)}' flyout>
        </axa-header-sub-navigation>
    </li>
  ` : bel`
    <li class="m-header-navigation__list-item">
      <a class="m-header-navigation__list-link js-header-navigation__list-link${writeClasses(classes)}" href="${url}">
        ${raw(name)}
      </a>
    </li>
  `}
`;

export default ({ items }) => bel`
  <nav class="m-header-navigation__nav">
    <ul class="m-header-navigation__list js-header-navigation__list">
      ${items && items.map(submenuItem)}
    </ul>
  </nav>
`;
