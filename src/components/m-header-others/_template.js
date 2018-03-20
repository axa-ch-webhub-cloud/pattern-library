import html from 'nanohtml/lib/browser';
import raw from 'nanohtml/raw';

export default ({ items }) => html`
  <ul class="m-header-others__list">
    ${items && items.map(({ url, name }, index) => html`
      <li class="m-header-others__list-item">
        <a href="${url}" class="m-header-others__list-link${index === 0 ? ' is-header-others-active' : ''}">${raw(name)}</a>
      </li>
    `)}
  </ul>
`;
