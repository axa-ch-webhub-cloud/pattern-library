import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';

class AXAPolicyFeatureItem extends BaseComponentGlobal {
  static tagName = 'axa-policy-feature-item'
  static propTypes = {
    classes: PropTypes.string,
    src: urlPropType,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }

  init() {
    super.init({
      styles, template,
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-policy-feature-item`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAPolicyFeatureItem.tagName, AXAPolicyFeatureItem);

export default AXAPolicyFeatureItem;
