import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXALink extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

domready(() => {
  window.customElements.define('axa-link', AXALink);

  BaseComponentGlobal.appendGlobalStyles(styles);
});
