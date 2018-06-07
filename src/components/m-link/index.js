import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXALink extends BaseComponentGlobal {
  static tagName = 'axa-link'

  static get observedAttributes() { return ['color', 'size', 'motion', 'arrow', 'href', 'listed', 'icon', 'deco', 'icons-path-prefix']; }

  constructor() {
    super({ styles, template });
  }
}

wcdomready(() => {
  window.customElements.define(AXALink.tagName, AXALink);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXALink;
