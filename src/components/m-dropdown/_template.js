import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

const arrowIcon = '<axa-icon size="sm" icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>';

export default ({
  native,
  title,
  items = [],
  size,
  selectedItem,
}) => html`
<article class="m-dropdown__wrap">
      <div class="${classnames('m-dropdown__select-wrap', { [`m-dropdown__select-wrap--${size}`]: size }, 'm-dropdown__list--native')} ${native ? ' m-dropdown__list--native--only' : ''}">
        <select class="${classnames('m-dropdown__select', 'js-dropdown__native-select', { [`m-dropdown__select--${size}`]: size })}">
        ${title && html`<option ${selectedItem === null ? 'selected' : ''}  value="" hidden disabled>${title}</option>`}
        ${Array.isArray(items) && items.map(({ name, value, isSelected }) =>
          html`<option value="${value}" ${isSelected ? 'selected' : ''}>${name}</option>`)
          }
        </select>
        ${raw(arrowIcon)}
      </div>
      <div class="m-dropdown__list--enhanced" ${native ? 'hidden' : ''}>
        <button type="button" class="${classnames('m-dropdown__toggle js-dropdown__toggle', { [`m-dropdown__toggle--${size}`]: size })}">
          ${title}${raw(arrowIcon)}
        </button>
        <ul class="m-dropdown__content js-dropdown__content">
          ${items && items.map(({ name, url = '#', isSelected, value }, index) => html`
            <li class="m-dropdown__item">
              <a tabindex="-1" class="m-dropdown__link js-dropdown__link" data-name="${name}" data-index="${index}" data-value="${value}" data-selected="${isSelected ? 'true' : 'false'}" href="${url}">${name}</a>
            </li>
          `)}
        </ul>
      </div>
</div>`;
