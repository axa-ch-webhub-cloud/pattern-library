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

  static propTypes = {
    classes: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    iconShown: PropTypes.bool,
    percentageShown: PropTypes.bool,
  }

  init() {
    super.init({ styles, template });

    this.progressBarHandler = new ProgressBarHandler(PRIORITY_LEVEL_ERRORHANDLING);
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
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAProgressBar.tagName, AXAProgressBar);

export default AXAProgressBar;
