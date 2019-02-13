import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first
import classnames from "classnames";

import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import styles from "./index.scss";
import template from "./_template";

class AXARadio extends BaseComponentGlobal {
  static tagName = "axa-radio";
  static propTypes = {
    inputId: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  };

  init() {
    super.init({ styles, template });
  }

  willRenderCallback() {
    const {
      props: { error, checked, disabled }
    } = this;

    this.className = classnames(this.initialClassName, "a-radio", {
      "a-radio--error": error,
      "a-radio--checked": checked,
      "a-radio--disabled": disabled
    });
  }
}

defineOnce(AXARadio.tagName, AXARadio);

export default AXARadio;
