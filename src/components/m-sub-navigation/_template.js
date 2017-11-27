import bel from 'bel';
import raw from 'bel/raw';
import hasNodeChildren from '../../js/has-node-children';

export default ({ items }, childrens) => {
  const arr = [];

  if (Array.isArray(items)) {
    if (hasNodeChildren(childrens, true)) {
      arr.push(bel`
        <div class="m-sub-navigation__index">
          <div class="m-sub-navigation__index-box">
            ${childrens}
          </div>
        </div>`);
    }

    arr.push(bel`
      <div class="m-sub-navigation__box">
        <div class="m-sub-navigation__row m-sub-navigation__row--col-${items.length}">
        ${items && items.map(({ boxes, title, isWide }) => bel`
          <div class="m-sub-navigation__block ${isWide ? 'm-sub-navigation__block--wide' : ''}">
            <strong class="m-sub-navigation__category">${title}</strong>
            <ul class="m-sub-navigation__list">
              ${boxes && boxes.map(({ url, name }) => bel`
                <li class="m-sub-navigation__list-item">
                  <a class="m-sub-navigation__link" href="${url}">${raw(name)}</a>
                </li>
              `)}
            </ul>
          </div>
        `)}
        </div>
      </div>
    `);
  } else {
    console.log(items)
  }

  return arr;
};
