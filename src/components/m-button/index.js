import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

class Button extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

window.customElements.define('axm-button', Button);

BaseComponentGlobal.appendGlobalStyles(styles);
