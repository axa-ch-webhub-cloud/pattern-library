import PropTypes from '../../js/prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXARadio extends BaseComponentGlobal {
  static tagName = 'axa-radio'
  static propTypes = {
    inputId: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });
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

defineOnce(AXARadio.tagName, AXARadio);

export default AXARadio;
