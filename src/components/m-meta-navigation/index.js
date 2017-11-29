import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from '../m-dropdown/js/drop-down';

class MetaNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
  connectedCallback() {
    super.connectedCallback();

    this.className = 'm-meta-navigation';

    this.dropDown = new DropDown(this);
  }
}

window.customElements.define('axa-meta-navigation', MetaNavigation);
