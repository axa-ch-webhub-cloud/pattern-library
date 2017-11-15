import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'm-sub-navigation__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `m-sub-navigation m-sub-navigation--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-sub-navigation', SubNavigation);
