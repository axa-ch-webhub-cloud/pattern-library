import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAFooterSocial extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const inline = getAttribute(this, 'inline');
    const light = getAttribute(this, 'light');

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
