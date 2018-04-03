import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXAChoice extends BaseComponentGlobal {
  static get observedAttributes() { return ['input-id', 'error', 'value', 'name', 'checked', 'disabled']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { error, checked, disabled } = this;

    const choiceClasses = classnames(this.initialClassName, 'a-choice', {
      'a-choice--error': error,
      'a-choice--checked': checked,
      'a-choice--disabled': disabled,
    });

    this.className = choiceClasses;
  }
}

wcdomready(() => {
  window.customElements.define('axa-choice', AXAChoice);
});

export default AXAChoice;
