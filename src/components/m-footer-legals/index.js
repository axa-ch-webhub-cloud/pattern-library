import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLegals extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = 'm-footer-legals';
  }
}

window.customElements.define('axa-footer-legals', FooterLegals);
