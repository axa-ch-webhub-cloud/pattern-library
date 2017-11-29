import bel from 'bel';

export default function (props, children) {
  return bel`<div class="m-footer-sub__box">
    <div class="m-footer-sub__row">${children}</div>
  </div>`;
}
