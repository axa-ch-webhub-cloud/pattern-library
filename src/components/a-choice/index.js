import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAChoice extends BaseComponentGlobal {
  static tagName = 'axa-choice';
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
    const {
      props: { error, checked, disabled },
    } = this;

    this.className = classnames(this.initialClassName, 'a-choice', {
      'a-choice--error': error,
      'a-choice--checked': checked,
      'a-choice--disabled': disabled,
    });
  }
}

defineOnce(AXAChoice.tagName, AXAChoice);

export default AXAChoice;
