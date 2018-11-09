import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import StickyContainer from './js/sticky-container';

export class AXAStickyContainer extends BaseComponentGlobal {
  static tagName = 'axa-sticky-container'
  static propTypes = {
    debug: PropTypes.bool,
  }

  constructor() {
    super({ styles });

    this.provideContext();
  }

  connectedCallback() {
    super.connectedCallback();

    const { props: { debug } } = this;

    this.className = classnames(this.initialClassName, 'o-sticky-container js-sticky-container', {
      'o-sticky-container--debug': debug,
    });

    this.stickyContainer = new StickyContainer(this);
  }

  disconnectedCallback() {
    if (this.stickyContainer) {
      this.stickyContainer.destroy();
      delete this.stickyContainer;
    }
  }
}


defineOnce(AXAStickyContainer.tagName, AXAStickyContainer);

export default AXAStickyContainer;
