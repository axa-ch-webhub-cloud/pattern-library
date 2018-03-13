import bel from 'bel';
import raw from 'bel/raw';

const linkItem = ({ url, name, isActive, preventDefault = 'false' }) => bel`
  <li class="m-header-sub-navigation__list-item">
    <a data-prevent-default="${preventDefault}" class="m-header-sub-navigation__link js-header-navigation-close ${isActive ? 'is-header-sub-navigation-active' : ''}" href="${url}">${raw(name)}</a>
  </li>
`;

// @TODO: proper behaviour still needs to be defined
const getColumnsCount = ({ length }) => {
  if (length === 2) {
    return length;
  } else if (length % 3 === 0 && length % 4 !== 0) {
    return 3;
  }

  return 4;
};

const rowItem = ({ columns, col, isWide }) => bel`
  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-${col || getColumnsCount(columns)}">

  ${columns && columns.map(({ links, title, url }) => bel`
    <div class="m-header-sub-navigation__block ${isWide ? 'm-header-sub-navigation__block--wide' : ''}">
      <strong class="m-header-sub-navigation__category">
        ${url ? bel`<a class="m-header-sub-navigation__category__link" href="${url}">${title}</a>` : title}
      </strong>

      <ul class="m-header-sub-navigation__list">
        ${links && links.map(linkItem)}
      </ul>
    </div>
  `)}
  </div>
`;

export default ({ items, indexurl, indextitle }) => {
  const arr = [];

  if (Array.isArray(items)) {
    if (indextitle && indexurl) {
      arr.push(bel`
        <div class="m-header-sub-navigation__index">
          <div class="m-header-sub-navigation__index-box">
            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="${indexurl}">${indextitle}</a>
            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">
              Close
              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>
            </button>
          </div>
        </div>`);
    }

    arr.push(bel`
      <div class="m-header-sub-navigation__box">
        ${items && items.map(rowItem)}
      </div>
    `);
  }

  return arr;
};
