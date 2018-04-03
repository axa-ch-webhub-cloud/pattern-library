import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderOthers extends BaseComponentGlobal {
  static get observedAttributes() { return ['items']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-others`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-others', AXAHeaderOthers);
});

export default AXAHeaderOthers;
