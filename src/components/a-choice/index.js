import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXAChoice extends BaseComponentGlobal {
  static tagName = 'axa-choice'

  static get observedAttributes() {
    return ['input-id', 'error', 'value', 'name', 'checked', 'disabled', 'controlled'];
  }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { error, checked, disabled } = this;

    this.className = classnames(this.initialClassName, 'a-choice', {
      'a-choice--error': error,
      'a-choice--checked': checked,
      'a-choice--disabled': disabled,
    });
  }
}

wcdomready(() => {
  window.customElements.define(AXAChoice.tagName, AXAChoice);
});

export default AXAChoice;
