import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubHeader extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-sub-header__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-sub-header o-sub-header--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-sub-header', SubHeader);
