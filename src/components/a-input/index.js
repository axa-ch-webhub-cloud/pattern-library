import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import Input from './js/input';

class AXAInput extends BaseComponentGlobal {
  static tagName = 'axa-input'

  static get observedAttributes() {
    return ['valid', 'inline', 'error', 'disabled', 'input-id', 'type', 'placeholder', 'value', 'name', 'icon'];
  }

  constructor() {
    super({ styles, template });

    this.input = new Input(this);
  }

  willRenderCallback() {
    const { valid, inline, error, disabled } = this;

    this.className = classnames('a-input', this.initialClassName, {
      'a-input--valid': valid,
      'a-input--inline': inline,
      'a-input--error': error,
      'a-input--disabled': disabled,
    });
  }
  didRenderCallback() {
    this.input.init();
  }
}

defineOnce(AXAInput.tagName, AXAInput);

export default AXAInput;
