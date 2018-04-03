import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXALink extends BaseComponentGlobal {
  static get observedAttributes() { return ['color', 'size', 'motion', 'arrow', 'href', 'listed', 'icon', 'deco']; }

  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-link', AXALink);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXALink;
