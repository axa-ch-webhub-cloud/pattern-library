import bel from 'bel';

export default (props, fragment) => bel`
  <ul class="m-header-meta-right__list">
    ${Array.from(fragment.children).map(child => bel`
      <li class="m-header-meta-right__list-item">${child}</li>
    `)}
  </ul>
`;
