import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MainHeader extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-main-header__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-main-header o-main-header--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-main-header', MainHeader);
