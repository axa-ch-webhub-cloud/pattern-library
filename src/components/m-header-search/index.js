import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderSearch extends BaseComponentGlobal {
  static tagName = 'axa-header-search';
  static propTypes = {
    action: PropTypes.string,
    href: urlPropType,
    method: PropTypes.oneOf(['GET', 'POST']),
  };

  static get observedAttributes() {
    return ['action', 'href', 'method'];
  }

  init() {
    super.init({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-search`;
  }
}

defineOnce(AXAHeaderSearch.tagName, AXAHeaderSearch);

export default AXAHeaderSearch;
