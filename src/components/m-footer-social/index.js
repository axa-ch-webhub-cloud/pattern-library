import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterSocial extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const inline = this.hasAttribute('inline') && this.getAttribute('inline') !== 'false';
    const light = this.hasAttribute('light') && this.getAttribute('light') !== 'false';

    this.className = classnames('m-footer-social', {
      'm-footer-social--inline': inline,
      'm-footer-social--light': light,
    });
  }
}

window.customElements.define('axa-footer-social', FooterSocial);
