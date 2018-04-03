import classnames from 'classnames';
import getAttribute from 'js/get-attribute';
import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXAFooterMain extends BaseComponentGlobal {
  static get observedAttributes() { return ['light']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.renderWCNode();
  }

  attributeChangedCallback() {
    this.renderWCNode();
  }

  renderWCNode() {
    const light = getAttribute(this, 'light');

    this.className = classnames(this.initialClassName, 'm-footer-main', {
      'm-footer-main--light': light,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-main', AXAFooterMain);
});

export default AXAFooterMain;
