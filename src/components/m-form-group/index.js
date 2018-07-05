import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import FormGroup from './js/form-group';
import styles from './index.scss';
import template from './_template';

class AXAFormGroup extends BaseComponentGlobal {
  static tagName = 'axa-form-group'

  static get observedAttributes() {
    return ['label', 'info', 'error'];
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { info, error } = this;

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

window.customElements.define(AXAFormGroup.tagName, AXAFormGroup);

export default AXAFormGroup;
