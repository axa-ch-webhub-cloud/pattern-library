import html from 'nanohtml';

export default function (props, childrenFragment) {
  return html`<div class="m-header-top-content-bar__box">${childrenFragment}</div>`;
}
