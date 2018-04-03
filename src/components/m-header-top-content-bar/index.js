import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXATopContentBar extends BaseComponentGlobal {
  static get observedAttributes() { return ['type']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { type } = this;

    this.className = `${this.initialClassName} m-header-top-content-bar m-header-top-content-bar--${type}`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-top-content-bar', AXATopContentBar);
});

export default AXATopContentBar;
