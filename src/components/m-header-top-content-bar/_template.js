import html from 'nanohtml/lib/browser';

export default function (props, childrenFragment) {
  return html`<div class="m-header-top-content-bar__box">${childrenFragment}</div>`;
}
