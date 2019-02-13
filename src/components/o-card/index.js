import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first
import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import styles from "./index.scss";
import template from "./_template";

class AXACard extends BaseComponentGlobal {
  static tagName = "axa-card";

  static propTypes = {
    classes: PropTypes.string,
    headline: PropTypes.string,
    subline: PropTypes.string
  };

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.classes} o-card`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXACard.tagName, AXACard);

export default AXACard;
