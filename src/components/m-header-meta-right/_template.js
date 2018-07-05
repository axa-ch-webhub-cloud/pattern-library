import html from 'nanohtml';

// IE11 does not support children on fragments
// ref: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10060579/
export default (props, { children, childNodes }) => html`
  <ul class="m-header-meta-right__list">
    ${Array.from(children || childNodes).map(child => html`
      <li class="m-header-meta-right__list-item">${child}</li>
    `)}
  </ul>
`;
