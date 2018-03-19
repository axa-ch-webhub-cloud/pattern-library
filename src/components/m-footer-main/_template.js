import html from 'nanohtml';

export default function (props, childrenFragment) {
  return html`<div class="m-footer-main__box">
    <div class="m-footer-main__row">${childrenFragment}</div>
  </div>`;
}
