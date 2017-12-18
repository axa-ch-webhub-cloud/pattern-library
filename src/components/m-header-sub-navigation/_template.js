import bel from 'bel';
import raw from 'bel/raw';
import hasNodeChildren from '../../js/has-node-children';

export default ({ items, indexurl, indextitle }) => {
  const arr = [];

  if (Array.isArray(items)) {
    if (indextitle && indexurl) {
      arr.push(bel`
        <div class="m-header-sub-navigation__index">
          <div class="m-header-sub-navigation__index-box">
            <a class="m-header-sub-navigation__index-link" href="${indexurl}">${indextitle}</a>
            <button type="button" class="m-header-sub-navigation__index-close js-header-sub-navigation__index-close">
              Close
              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>
            </button>
          </div>
        </div>`);
    }

    arr.push(bel`
      <div class="m-header-sub-navigation__box">

        ${items && items.map(({ column, col, isWide }) => bel`
          <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-${col}">

          ${column && column.map(({ boxes, title }) => bel`
            <div class="m-header-sub-navigation__block ${isWide ? 'm-header-sub-navigation__block--wide' : ''}">
              <strong class="m-header-sub-navigation__category">${title}</strong>

              <ul class="m-header-sub-navigation__list">
                ${boxes && boxes.map(({ url, name }) => bel`
                  <li class="m-header-sub-navigation__list-item">
                    <a class="m-header-sub-navigation__link" href="${url}">${raw(name)}</a>
                  </li>
                `)}
              </ul>
            </div>
          `)}
          </div>
        `)}
      </div>
    `);
  }

  return arr;
};
