import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXARadio extends BaseComponentGlobal {
  static tagName = 'axa-radio'

  static get observedAttributes() { return ['input-id', 'error', 'value', 'name', 'checked', 'disabled']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { error, checked, disabled } = this;

    this.className = classnames(this.initialClassName, 'a-radio', {
      'a-radio--error': error,
      'a-radio--checked': checked,
      'a-radio--disabled': disabled,
    });
  }
}

wcdomready(() => {
  window.customElements.define(AXARadio.tagName, AXARadio);
});

export default AXARadio;
