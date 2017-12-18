import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from '../m-dropdown/js/drop-down';
import { wcdomready } from '../../js/wcdomready';

class AXAMetaNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-meta-navigation`;

    this.dropDown = new DropDown(this);
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-meta-navigation', AXAMetaNavigation);
});
