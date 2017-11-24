import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class Icon extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

window.customElements.define('axa-icon', Icon);
