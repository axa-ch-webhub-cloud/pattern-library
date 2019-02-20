// import PropTypes from "../../js/prop-types";
// import classnames from "classnames";
import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
// import urlPropType from "../../js/prop-types/url-prop-type";
// import the styles used for this component
import styles from "./index.scss";
// import the template used for this component
import template from "./_template";

class AXAModal extends BaseComponentGlobal {
  static tagName = "axa-modal";

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName}`;
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
