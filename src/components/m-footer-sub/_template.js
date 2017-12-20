import bel from 'bel';

export default function (props, childrenFragment) {
  return bel`<div class="m-footer-sub__box">
    <div class="m-footer-sub__row">${childrenFragment}</div>
  </div>`;
}
