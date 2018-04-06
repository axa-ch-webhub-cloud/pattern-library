import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default ({ items }) => html`
  <ul class="m-header-others__list">
    ${Array.isArray(items) && items.map(({ url, name, isActive }) => html`
      <li class="m-header-others__list-item">
        <a href="${url}" class="${classnames('m-header-others__list-link', {
          'is-header-others-active': isActive,
        })}">${raw(name)}</a>
      </li>
    `)}
  </ul>
`;
