import bel from 'bel';

export default function (props, children) {
  return bel`<div class="m-footer-main__box">
    <div class="m-footer-main__row">${children}</div>
  </div>`;
}
