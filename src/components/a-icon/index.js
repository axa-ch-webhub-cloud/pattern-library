import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAIcon extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-icon', AXAIcon);
});

export default AXAIcon;
