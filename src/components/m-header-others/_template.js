import bel from 'bel';
import raw from 'bel/raw';

export default ({ items }) => bel`
  <ul class="m-header-others__list">
    ${items && items.map(({ url, name }, index) => bel`
      <li class="m-header-others__list-item">
        <a href="${url}" class="m-header-others__list-link${index === 0 ? ' is-active' : ''}">${raw(name)}</a>
      </li>
    `)}
  </ul>
`;
