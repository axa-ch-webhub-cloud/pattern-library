import PropTypes from '../../js/prop-types';
import classnames from 'classnames';

import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';

class AXAFooterLegals extends BaseComponentGlobal {
  static tagName = 'axa-footer-legals'
  static propTypes = {
    bottom: PropTypes.bool,
  }

  constructor() {
    super({ styles });
  }

  connectedCallback() {
    super.connectedCallback();

    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const bottom = getAttribute(this, 'bottom');

    this.className = classnames(this.initialClassName, 'm-footer-legals', {
      'm-footer-legals--bottom': bottom,
    });
  }
}

defineOnce(AXAFooterLegals.tagName, AXAFooterLegals);

export default AXAFooterLegals;
