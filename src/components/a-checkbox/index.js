import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXACheckbox extends BaseComponentGlobal {
  static tagName = 'axa-checkbox';
  static propTypes = {
    inputId: PropTypes.string,
    error: PropTypes.bool,
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  init() {
    super.init({ styles, template });
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

defineOnce(AXACheckbox.tagName, AXACheckbox);

export default AXACheckbox;
