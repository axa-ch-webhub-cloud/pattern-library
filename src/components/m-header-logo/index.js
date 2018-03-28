import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderLogo extends BaseComponentGlobal {
  static get observedAttributes() { return ['alt', 'href', 'src']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-logo`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-logo', AXAHeaderLogo);
});

export default AXAHeaderLogo;
