import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MetaNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'm-meta-navigation-mobile__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `m-meta-navigation-mobile m-meta-navigation-mobile--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-meta-navigation-mobile', MetaNavigationMobile);
