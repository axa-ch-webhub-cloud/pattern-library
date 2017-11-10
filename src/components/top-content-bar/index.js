import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class TopContentBar extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-top-content-bar__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-top-content-bar o-top-content-bar--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-top-content-bar', TopContentBar);
