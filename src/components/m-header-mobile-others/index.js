import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';

class AXAHeaderMobileOthers extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-others'

  static get observedAttributes() { return ['items']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-others`;
  }
}

defineOnce(AXAHeaderMobileOthers.tagName, AXAHeaderMobileOthers);

export default AXAHeaderMobileOthers;
