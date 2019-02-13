import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first
import classnames from "classnames";

import getAttribute from "../../js/get-attribute";
import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import styles from "./index.scss";
import template from "./_template";

class AXAFooterMain extends BaseComponentGlobal {
  static tagName = "axa-footer-main";
  static propTypes = {
    light: PropTypes.bool
  };

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.renderWCNode();
  }

  attributeChangedCallback() {
    this.renderWCNode();
  }

  renderWCNode() {
    const light = getAttribute(this, "light");

    this.className = classnames(this.initialClassName, "m-footer-main", {
      "m-footer-main--light": light
    });
  }
}

defineOnce(AXAFooterMain.tagName, AXAFooterMain);

export default AXAFooterMain;
