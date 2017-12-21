import bel from 'bel';

export default (props, { children }) => bel`
  <ul class="m-header-meta-right__list">
    ${Array.from(children).map(child => bel`
      <li class="m-header-meta-right__list-item">${child}</li>
    `)}
  </ul>
`;
