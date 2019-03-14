import ProgressBarHandler from './js/progress-bar-handler';

import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';

import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

const PRIORITY_LEVEL_ERRORHANDLING = 2;

class AXAProgressBar extends BaseComponentGlobal {
  static tagName = 'axa-progress-bar'


  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    iconShown: PropTypes.bool,
    percentageShown: PropTypes.bool,
  }

  // Only use this if you need to observe attributes other than your prop-types!
  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  // static get observedAttributes() {
  //  return ['classes'];
  // }

  // Always use init if you want to construct your element
  // never use the constructor directly, we call init for you with the proper context
  // @link https://github.com/WebReflection/document-register-element#v1-caveat
  init() {
    super.init({ styles, template });

    this.progressBarHandler = new ProgressBarHandler(PRIORITY_LEVEL_ERRORHANDLING);
    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-progress-bar`;
    this.progressBarHandler.init(this.getAttribute('value'), this.getAttribute('max'));
    this.progressBarHandler.testComponent();
    this.progressBarHandler.printMessages();
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  // You have some special logic? Or need to update the web-components DOM node itself?
  // Then don't forget to make sure that incremental rendering works properly.
  // attributeChangedCallback(name, oldValue, newValue) {
  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  // You may want to update stuff before rendering.
  // willRenderCallback(initial) {
  // }

  // You may want to update staff after rendering
  // didRenderCallback(initial) {
  // }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Don't forget to cleanup :)
  }

  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
}

defineOnce(AXAProgressBar.tagName, AXAProgressBar);

export default AXAProgressBar;
