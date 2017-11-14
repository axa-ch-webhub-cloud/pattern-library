import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MetaHeader extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-meta-header__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-meta-header o-meta-header--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-meta-header', MetaHeader);
