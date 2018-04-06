import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default ({ items }) => [html`
  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">
    ${Array.isArray(items) && items[0].name}
    <axa-icon icon="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>
  </button>
`, html`
  <ul class="m-header-languages__list">
    ${Array.isArray(items) && items.map(({ url = '', name, isActive }) => html`
      <li class="m-header-languages__list-item">
        <a class="${classnames('m-header-languages__list-link', {
          'is-header-languages-active': isActive,
        })}" href="${url}">
          ${raw(name)}
        </a>
      </li>
    `)}
  </ul>
`];
