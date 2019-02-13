import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import template from "./_template";
import styles from "./index.scss";

class AXAAccordion extends BaseComponentGlobal {
  static tagName = "axa-accordion";

  init() {
    super.init({ styles, template });

    this.provideContext();
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-accordion js-accordion`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAAccordion.tagName, AXAAccordion);

export default AXAAccordion;
