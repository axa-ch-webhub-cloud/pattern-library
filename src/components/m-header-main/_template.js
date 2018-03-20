import html from 'nanohtml/lib/browser';

export default (props, childrenFragment) => html`
  <div class="m-header-main__box">${childrenFragment}</div>
`;
