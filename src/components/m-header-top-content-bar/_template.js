import bel from 'bel';

export default function (props, childrenFragment) {
  return bel`<div class="m-header-top-content-bar__box">${childrenFragment}</div>`;
}
