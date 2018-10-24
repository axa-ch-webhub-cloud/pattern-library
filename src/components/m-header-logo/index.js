import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import HeaderLogo from './js/header-logo';

class AXAHeaderLogo extends BaseComponentGlobal {
  static tagName = 'axa-header-logo'
  static propTypes = {
    alt: PropTypes.string,
    href: urlPropType,
    src: urlPropType,
  }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-logo`;
  }

  didRenderCallback() {
    if (this.logo) {
      this.logo.destroy();
    }

    this.logo = new HeaderLogo(this);
  }

  disconnectedCallback() {
    if (this.logo) {
      this.logo.destroy();
      delete this.logo;
    }
  }
}

defineOnce(AXAHeaderLogo.tagName, AXAHeaderLogo);

export default AXAHeaderLogo;
