import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
import styles from './index.scss';
import template from './_template';

class AXAFooterSub extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-footer-sub`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-sub', AXAFooterSub);
});

export default AXAFooterSub;
