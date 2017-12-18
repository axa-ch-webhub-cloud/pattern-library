import bel from 'bel';

export default function (props, children) {
  return bel`<div class="m-header-top-content-bar__box">${children}</div>`;
}
