import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { wcdomready } from '../../js/wcdomready';

class AXALink extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-link', AXALink);

  BaseComponentGlobal.appendGlobalStyles(styles);
});
