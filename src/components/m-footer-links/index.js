import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLinks extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

window.customElements.define('axa-footer-links', FooterLinks);
