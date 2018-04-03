import classnames from 'classnames';
import wcdomready from 'js/wcdomready';
import BaseComponentGlobal from 'js/abstract/base-component-global';

import styles from './index.scss';
import template from './_template';
import DropDown from './js/drop-down';

class AXADropdown extends BaseComponentGlobal {
  static get observedAttributes() { return ['in-flow', 'items', 'native', 'size', 'title']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    this.dropDown.destroy();
    delete this.dropDown;
  }

  willRenderCallback() {
    const { inFlow, size } = this;

    this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
      [`m-dropdown--${size}`]: size,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-dropdown', AXADropdown);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXADropdown;
