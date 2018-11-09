import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import FormGroup from './js/form-group';
import styles from './index.scss';
import template from './_template';

class AXAFormGroup extends BaseComponentGlobal {
  static tagName = 'axa-form-group'
  static propTypes = {
    label: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { props: { info, error } } = this;

    this.className = classnames(this.initialClassName, 'm-form-group', {
      'm-form-group--info': info,
      'm-form-group--error': error,
    });
  }

  didRenderCallback() {
    if (this.interaction) {
      this.interaction.destroy();
    }

    this.interaction = new FormGroup(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.interaction.destroy();
    delete this.interaction;
  }
}

defineOnce(AXAFormGroup.tagName, AXAFormGroup);

export default AXAFormGroup;
