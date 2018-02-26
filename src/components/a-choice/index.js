import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttribute from '../../js/get-attribute';

class AXAChoice extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();


    const choiceClasses = classnames(this.initialClassName, 'a-choice', {
      'a-choice--error': getAttribute(this, 'error'),
      'a-choice--checked': getAttribute(this, 'checked'),
      'a-choice--disabled': getAttribute(this, 'disabled'),
    });

    this.className = choiceClasses;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Don't forget to cleanup :)
  }

  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
}

wcdomready(() => {
  window.customElements.define('axa-choice', AXAChoice);
});

export default AXAChoice;
