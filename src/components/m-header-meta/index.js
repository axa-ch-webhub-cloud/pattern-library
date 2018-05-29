import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMeta extends BaseComponentGlobal {
  static tagName = 'axa-header-meta'

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-meta`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeaderMeta.tagName, AXAHeaderMeta);
});

export default AXAHeaderMeta;
