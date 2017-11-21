import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MainNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'm-main-navigation-mobile__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `m-main-navigation-mobile m-main-navigation-mobile--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-main-navigation-mobile', MainNavigationMobile);
