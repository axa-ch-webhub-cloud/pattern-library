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

    box.className = 'o-sub-navigation__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-sub-navigation o-sub-navigation--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-sub-navigation', SubNavigation);
