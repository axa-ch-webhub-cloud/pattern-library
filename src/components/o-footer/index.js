import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";

class AXAFooter extends BaseComponentGlobal {
  static tagName = "axa-footer";

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
