import bel from 'bel';

export default function (props, childrenFragment) {
  return bel`<div class="m-footer-main__box">
    <div class="m-footer-main__row">${childrenFragment}</div>
  </div>`;
}
