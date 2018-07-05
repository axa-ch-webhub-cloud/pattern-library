import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderMetaRight extends BaseComponentGlobal {
  static tagName = 'axa-header-meta-right'

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-meta-right`;
  }
}

window.customElements.define(AXAHeaderMetaRight.tagName, AXAHeaderMetaRight);

export default AXAHeaderMetaRight;
