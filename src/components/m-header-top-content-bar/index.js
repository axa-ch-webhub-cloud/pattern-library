import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXATopContentBar extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');


    this.className = `${this.initialClassName} m-header-top-content-bar m-header-top-content-bar--${type}`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-top-content-bar', AXATopContentBar);
});

export default AXATopContentBar;
