import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterSub extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = 'm-footer-sub';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-footer-sub', FooterSub);
}, false);
