import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import HeaderMobile from './js/header-mobile';

class AXAHeaderMobile extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile';
  static propTypes = {
    offcanvas: PropTypes.bool,
  };

  init() {
    super.init({ styles, template });

    this.consumeContext('axa-header');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile`;
  }

  contextCallback(contextNode) {
    if (this.interaction) {
      this.interaction.contextNode = contextNode;
    }
  }

  didRenderCallback() {
    if (this.interaction) {
      this.interaction.destroy();
    }

    this.interaction = new HeaderMobile(this);

    const { contextNode } = this;

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.interaction) {
      this.interaction.destroy();
      delete this.interaction;
    }
  }
}

defineOnce(AXAHeaderMobile.tagName, AXAHeaderMobile);

export default AXAHeaderMobile;
