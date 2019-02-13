import on from "../../../js/on";
import fire from "../../../js/fire";
import { AXA_EVENTS, EVENTS } from "../../../js/ui-events";

/**
 * @fires HeaderLogo#axa-click
 */
class HeaderLogo {
  static DEFAULTS = {
    link: ".js-header-logo__link"
  };

  constructor(wcNode, options = {}) {
    this.wcNode = wcNode;
    this.options = {
      ...HeaderLogo.DEFAULTS,
      ...options
    };

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  init() {
    this.link = this.wcNode.querySelector(this.options.link);

    this.on();
  }

  on() {
    this.off();

    this.unClick = on(this.link, EVENTS.CLICK, this.handleClick, {
      passive: false
    });
  }

  handleClick(event) {
    /**
     * axa-click event.
     *
     * @event HeaderLogo#axa-click
     * @type {null}
     */
    const cancelled = fire(this.wcNode, AXA_EVENTS.AXA_CLICK, null, {
      bubbles: true,
      cancelable: true,
      composed: true
    });

    if (!cancelled) {
      event.preventDefault();
    }
  }

  off() {
    if (this.unClick) {
      this.unClick();
    }
  }

  destroy() {
    this.off();

    delete this.link;
    delete this.wcNode;
    delete this.options;
    delete this.handleClick;
  }
}

export default HeaderLogo;
