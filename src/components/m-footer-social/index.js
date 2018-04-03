import classnames from 'classnames';
import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXAFooterSocial extends BaseComponentGlobal {
  static get observedAttributes() { return ['inline', 'items', 'light', 'title']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { inline, light } = this;

    this.className = classnames(this.initialClassName, 'm-footer-social', {
      'm-footer-social--inline': inline,
      'm-footer-social--light': light,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-social', AXAFooterSocial);
});

export default AXAFooterSocial;
