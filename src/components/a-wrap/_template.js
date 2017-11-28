import bel from 'bel';
import classnames from 'classnames';

export default function (props, children) {
  return bel`<div class="a-warp__box">
      ${children}
    </div>`;
}
