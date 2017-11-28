import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLegals extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

window.customElements.define('axa-footer-legals', FooterLegals);
