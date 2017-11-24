import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from '../m-dropdown/js/drop-down';

class MetaNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'm-meta-navigation__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `m-meta-navigation m-meta-navigation--${type}`;

    this.appendChild(box);

    this.dropDown = new DropDown(this);
  }
}

window.customElements.define('axa-meta-navigation', MetaNavigation);
