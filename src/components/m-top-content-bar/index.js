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

    box.className = 'm-top-content-bar__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `m-top-content-bar m-top-content-bar--${type}`;
    this.appendChild(box);

    this.box = box;
  }

  disconnectedCallback() {
    this.removeChild(this.box);
  }
}

window.customElements.define('axa-top-content-bar', TopContentBar);
