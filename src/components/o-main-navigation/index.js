import styles from './index.scss';
import Stroke from './js/stroke';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MainNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-main-navigation__box';

    while (this.childNodes.length) {
      box.appendChild(this.firstChild);
    }

    this.className = `o-main-navigation o-main-navigation--${type}`;

    this.appendChild(box);

    this.stroke = new Stroke();
  }
  disconnectedCallback() {
    this.stroke.destroy();
    delete this.stroke;
  }
}

window.customElements.define('axa-main-navigation', MainNavigation);
