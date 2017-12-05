import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class Link extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

domready(() => {
  window.customElements.define('axa-link', Link);

  BaseComponentGlobal.appendGlobalStyles(styles);
});
