import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
// import the styles used for this component
import styles from "./index.scss";
// import the template used for this component
import template from "./_template";

class AXAVerticalRhythm extends BaseComponentGlobal {
  static tagName = "axa-vertical-rhythm";

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} a-vertical-rhythm`;
  }
}

defineOnce(AXAVerticalRhythm.tagName, AXAVerticalRhythm);

export default AXAVerticalRhythm;
