import classnames from 'classnames';

import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';

import styles from './index.scss';
import template from './_template';

class AXACheckbox extends BaseComponentGlobal {
  static tagName = 'axa-checkbox'

  static get observedAttributes() {
    return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { error, checked, disabled } = this;

    this.className = classnames(this.initialClassName, 'a-checkbox', {
      'a-checkbox--error': error,
      'a-checkbox--checked': checked,
      'a-checkbox--disabled': disabled,
    });
  }
}

wcdomready(() => {
  window.customElements.define(AXACheckbox.tagName, AXACheckbox);
});

export default AXACheckbox;
