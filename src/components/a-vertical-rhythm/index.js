import { BaseComponentGlobal } from '../../js/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAVerticalRhythm extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} a-vertical-rhythm`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-vertical-rhythm', AXAVerticalRhythm);
});

export default AXAVerticalRhythm;
