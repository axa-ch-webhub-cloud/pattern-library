import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import FormGroup from './js/form-group';

import styles from './index.scss';
import template from './_template';

class AXAFormGroup extends BaseComponentGlobal {
  static get observedAttributes() {
    return ['label', 'info'];
  }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { info } = this;

    this.className = classnames(this.initialClassName, 'm-form-group', {
      'm-form-group--info': info,
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

wcdomready(() => {
  window.customElements.define('axa-form-group', AXAFormGroup);
});

export default AXAFormGroup;
