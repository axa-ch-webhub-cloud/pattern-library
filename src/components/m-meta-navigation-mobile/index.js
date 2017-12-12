import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXAMetaNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

domready(() => {
  window.customElements.define('axa-meta-navigation-mobile', AXAMetaNavigationMobile);
});
