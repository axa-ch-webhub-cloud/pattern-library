import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first

import styles from "./index.scss";
import template from "./_template";
import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import urlPropType from "../../js/prop-types/url-prop-type";

class AXAHeaderMobileOthers extends BaseComponentGlobal {
  static tagName = "axa-header-mobile-others";
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isActive: PropTypes.bool
      })
    )
  };

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-others`;
  }
}

defineOnce(AXAHeaderMobileOthers.tagName, AXAHeaderMobileOthers);

export default AXAHeaderMobileOthers;
