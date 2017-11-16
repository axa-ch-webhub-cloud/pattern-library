import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    this.className = 'm-sub-navigation';
    this.innerHTML = `<div class="m-sub-navigation__box">${this.initialInnerHTML}</div>`;
  }
}

window.customElements.define('axa-sub-navigation', SubNavigation);
