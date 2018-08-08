import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXACommercialHeroCover extends BaseComponentGlobal {
  static tagName = 'axa-commercial-hero-cover'

  static get observedAttributes() { return ['src', 'alt', 'gradient', 'content-align']; }

  constructor() {
    super({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} o-commercial-hero-cover`;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXACommercialHeroCover.tagName, AXACommercialHeroCover);

export default AXACommercialHeroCover;
