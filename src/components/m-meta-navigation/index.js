import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from '../m-dropdown/js/drop-down';
import { domready } from '../../js/domready';

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

domready(() => {
  window.customElements.define('axa-meta-navigation', MetaNavigation);
});
