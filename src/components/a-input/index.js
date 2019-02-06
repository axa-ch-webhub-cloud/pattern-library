import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import Input from './js/input';
import fire from '../../js/fire';
import { AXA_EVENTS } from '../../js/ui-events';

class AXAInput extends BaseComponentGlobal {
  static tagName = 'axa-input'
  static propTypes = {
    valid: PropTypes.bool,
    inline: PropTypes.bool,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    inputId: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    disablePaste: PropTypes.bool,
    readonly: PropTypes.bool,
  }

  init() {
    super.init({ styles, template });
    this.input = new Input(this);
  }

  willRenderCallback() {
    const { props: { icon, valid, inline, error, disabled, readonly } } = this;

    this.className = classnames('a-input', this.initialClassName, {
      'a-input--valid': valid,
      'a-input--inline': inline,
      'a-input--error': error,
      'a-input--disabled': disabled,
      'a-input--readonly': readonly,
      'a-input--icon': icon,
    });
  }

  didRenderCallback() {
    this.input.init();
    fire(this, AXA_EVENTS.AXA_RENDER, '', this.input.inputfield, { bubbles: true, cancelable: true, composed: true });
  }

  disconnectedCallback() {
    this.input.destroy();
  }
}

defineOnce(AXAInput.tagName, AXAInput);

export default AXAInput;
