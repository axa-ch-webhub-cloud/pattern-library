import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import DropDown from './js/drop-down';
import wcdomready from '../../js/wcdomready';

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown'

  static get observedAttributes() { return ['in-flow', 'items', 'native', 'size', 'title', 'value']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { inFlow, size, gpu } = this;

    this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
      'm-dropdown--gpu': gpu,
      [`m-dropdown--${size}`]: size,
    });
  }

  didRenderCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
    }

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }
}

wcdomready(() => {
  window.customElements.define(AXADropdown.tagName, AXADropdown);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXADropdown;
