import bel from 'bel';
import classnames from 'classnames';

export default ({ offcanvas }, children) => [bel`<div class="m-header-mobile__backdrop js-m-header-mobile__backdrop"></div>`,
  bel`<div class="m-header-mobile__canvas js-header-mobile__canvas ${classnames({
    'm-header-mobile__canvas--off-canvas': !offcanvas,
  })}">
    <div class="m-header-mobile__box">
      ${children}
    </div>
  </div>
`];
