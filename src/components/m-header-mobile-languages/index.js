import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first

import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import urlPropType from "../../js/prop-types/url-prop-type";
import { AXA_EVENTS, EVENTS } from "../../js/ui-events";
import on from "../../js/on";
// import the styles used for this component
import styles from "./index.scss";
// import the template used for this component
import template from "./_template";
import valuePropType from "../../js/prop-types/value-prop-type";
import fire from "../../js/fire";

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  static tagName = "axa-header-mobile-languages";
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        url: urlPropType,
        code: PropTypes.string,
        isActive: PropTypes.bool
      })
    ),
    value: valuePropType
  };

  init() {
    super.init({ styles, template });

    this.handleClick = event => {
      const {
        target: { lang }
      } = event;

      /**
       * axa-click event.
       *
       * @event FooterLinks#axa-click
       * @type {object}
       */
      const cancelled = fire(this, AXA_EVENTS.AXA_CLICK, lang, {
        bubbles: true,
        cancelable: true,
        composed: true
      });

      if (!cancelled) {
        event.preventDefault();
      }

      if (lang) {
        event.stopPropagation();
        this.setAttribute("value", lang);
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;

    this.unClickEnd = on(
      this,
      EVENTS.CLICK,
      "js-header-mobile-languages__link",
      this.handleClick,
      {
        capture: true,
        passive: false
      }
    );
  }

  disconnectedCallback() {
    if (this.unClickEnd) {
      this.unClickEnd();
    }
  }
}

defineOnce(AXAHeaderMobileLanguages.tagName, AXAHeaderMobileLanguages);

export default AXAHeaderMobileLanguages;
