import bel from 'bel';
import raw from 'bel/raw';

export default ({ left, right }, childrens) => bel`
${left ? bel`
  <div class="m-header-meta-navigation__box">
    <div class="m-header-meta-navigation__row">
      <nav class="m-header-meta-navigation__nav-left">
        <ul class="m-header-meta-navigation__list">
          ${left && left.map(({ url, name }, index) => bel`
            <li class="m-header-meta-navigation__list-item">
              <a href="${url}" class="m-header-meta-navigation__list-link${index === 0 ? ' is-active' : ''}">${raw(name)}</a>
            </li>
          `)}
        </ul>
      </nav>
      ${right && right.length ? bel`
        <nav class="m-header-meta-navigation__nav-right">
          <ul class="m-header-meta-navigation__list-right">
            <li class="m-header-meta-navigation__list-item-right">
              <div class="m-header-meta-navigation__lang-drop-down js-dropdown">
                <button role="button" class="m-header-meta-navigation__lang-drop-down__toggle js-dropdown__toggle">
                  ${right[0].name}
                  <svg class="m-header-meta-navigation__lang-drop-down-icon">
                    <use xlink:href="#src--assets--icons--angle-bracket-right" />
                  </svg>
                </button>

                <ul class="m-header-meta-navigation__lang-list">
                ${right && right.map(({ url, name }, index) => bel`
                  <li class="m-header-meta-navigation__lang-list-item">
                    <a class="m-header-meta-navigation__lang-list-link${index === 0 ? ' is-active' : ''}" href="${url}">${raw(name)}</a>
                  </li>
                `)}
                </ul>
              </div>
            </li>
            ${childrens}
          </ul>
        </nav>
      ` : ''}
    </div>
  </div>
  ` : ''}
`;
