import html from 'nanohtml/lib/browser';

export default (props, { children }) => html`
  <ul class="m-header-meta-right__list">
    ${Array.from(children).map(child => html`
      <li class="m-header-meta-right__list-item">${child}</li>
    `)}
  </ul>
`;
