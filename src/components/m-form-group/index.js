import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';
import FormGroup from './js/form-group';

class AXAFormGroup extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { info } = getAttributes(this);

    const formGroupClasses = classnames(this.initialClassName, 'm-form-group', {
      'm-form-group--info': info,
    });

    this.className = formGroupClasses;
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
