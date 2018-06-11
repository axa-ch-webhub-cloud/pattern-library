import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAVerticalRhythm extends BaseComponentGlobal {
  static tagName = 'axa-vertical-rhythm'

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} a-vertical-rhythm`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAVerticalRhythm.tagName, AXAVerticalRhythm);
});

export default AXAVerticalRhythm;
