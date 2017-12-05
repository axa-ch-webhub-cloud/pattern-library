import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

class TopContentBar extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');

    this.className = `m-top-content-bar m-top-content-bar--${type}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-top-content-bar', TopContentBar);
}, false);
