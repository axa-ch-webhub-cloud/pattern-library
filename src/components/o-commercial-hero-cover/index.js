import 'picturefill';
import 'objectFitPolyfill';
import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';

class AXACommercialHeroCover extends BaseComponentGlobal {
  static tagName = 'axa-commercial-hero-cover'
  static propTypes = {
    src: urlPropType,
    alt: PropTypes.string,
    gradient: PropTypes.oneOf(['white', 'black']),
    contentAlign: PropTypes.oneOf(['left', 'right']),
    pictureClasses: PropTypes.string,
    heroObjectPosition: PropTypes.string,
  }

  constructor() {
    super({
      styles, template,
    });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} o-commercial-hero-cover`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXACommercialHeroCover.tagName, AXACommercialHeroCover);

export default AXACommercialHeroCover;
