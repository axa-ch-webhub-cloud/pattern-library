import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import styles from "./index.scss";
import template from "./_template";

class AXAFooterSub extends BaseComponentGlobal {
  static tagName = "axa-footer-sub";

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-footer-sub`;
  }
}

defineOnce(AXAFooterSub.tagName, AXAFooterSub);

export default AXAFooterSub;
