import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import { domready } from '../../js/domready';

class AXAIcon extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

domready(() => {
  window.customElements.define('axa-icon', AXAIcon);
});
