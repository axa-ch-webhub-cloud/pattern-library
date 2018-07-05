import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';

class AXAHeaderTopContentBar extends BaseComponentGlobal {
  static tagName = 'axa-header-top-content-bar'

  static get observedAttributes() { return ['type']; }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { type } = this;

    this.className = `${this.initialClassName} m-header-top-content-bar m-header-top-content-bar--${type}`;
  }
}

window.customElements.define(AXAHeaderTopContentBar.tagName, AXAHeaderTopContentBar);

export default AXAHeaderTopContentBar;
