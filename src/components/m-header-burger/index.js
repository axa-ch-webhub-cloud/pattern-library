import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
// import the styles used for this component
import styles from "./index.scss";
// import the template used for this component
import template from "./_template";
import Burger from "./js/burger";

class AXAHeaderBurger extends BaseComponentGlobal {
  static tagName = "axa-header-burger";

  init() {
    super.init({ styles, template });

    this.consumeContext("axa-header");
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-burger`;
    this.burger = new Burger(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.burger.destroy();
    delete this.burger;
  }

  contextCallback(contextNode) {
    this.burger.contextNode = contextNode;
  }
}

defineOnce(AXAHeaderBurger.tagName, AXAHeaderBurger);

export default AXAHeaderBurger;
