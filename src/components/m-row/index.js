import PropTypes from '../../js/prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

class AXARow extends BaseComponentGlobal {
  static tagName = 'axa-row'
  static propTypes = {
    classes: PropTypes.string,
    noGutters: PropTypes.bool,
  }

  constructor() {
    super({ styles });
  }

  // You may want to update stuff before rendering.
  willRenderCallback() {
    const { noGutters, classes } = this;

    this.className = classnames('m-row', 'u-row', classes, { 'u-no-gutters': noGutters });
  }
}

defineOnce(AXARow.tagName, AXARow);

export default AXARow;
