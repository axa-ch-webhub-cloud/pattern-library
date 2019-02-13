import html from 'nanohtml';
import classnames from 'classnames';

export default ({ items }) => html`
  <ul class="m-header-mobile-others__list">
    ${Array.isArray(items) &&
      items.map(
        ({ name, url = '', isActive = false }) => html`
          <li class="m-header-mobile-others__list-item">
            <a
              href="${url}"
              class="${classnames('m-header-mobile-others__link', 'js-header-mobile-close', {
                'is-header-mobile-others-active': isActive,
              })}"
              >${name}</a
            >
          </li>
        `
      )}
  </ul>
`;
