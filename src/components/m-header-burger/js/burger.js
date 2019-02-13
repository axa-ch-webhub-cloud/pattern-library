import Enum from "../../../js/enum";
import on from "../../../js/on";
import ownerWindow from "../../../js/owner-window";
import posY from "../../../js/pos-y";
import scrollTo from "../../../js/scroll-to";
import getScrollTop from "../../../js/get-scroll-top";
import { requestAnimationFrame } from "../../../js/request-animation-frame";
import { add, remove } from "../../../js/class-list";
import { publish, subscribe } from "../../../js/pubsub";

const EVENTS = Enum("click", "resize", "keyup");

class Burger {
  static DEFAULTS = {
    burger: ".js-header-burger__button",
    burgerState: "is-burger-open"
  };

  constructor(wcNode, options) {
    this.wcNode = wcNode;
    this.options = {
      ...Burger.DEFAULTS,
      ...options
    };
    this.isOpen = false;

    this.init();
  }

  init() {
    this.burger = this.wcNode.querySelector(this.options.burger);

    this.on();
  }

  set contextNode(value) {
    this._contextNode = value;

    this.onContextEnabled();
  }

  onContextEnabled() {
    // check if context is ready
    if (this._contextNode) {
      this.offContextEnabled();

      this.unSubscribeOpen = subscribe(
        "header-mobile/open",
        this.open,
        this._contextNode
      );
      this.unSubscribeClose = subscribe(
        "header-mobile/close",
        this.close,
        this._contextNode
      );
    }
  }

  offContextEnabled() {
    if (this.unSubscribeOpen) {
      this.unSubscribeOpen();
    }

    if (this.unSubscribeClose) {
      this.unSubscribeClose();
    }
  }

  on() {
    this.off();

    this._unBurgerClick = on(
      this.burger,
      EVENTS.CLICK,
      this._handleBurgerClick,
      { passive: false }
    );
    this._unResize = on(
      ownerWindow(this.wcNode),
      EVENTS.RESIZE,
      this._handleResize
    );
    this._unCloseEscape = on(
      this.wcNode.ownerDocument,
      EVENTS.KEYUP,
      this._handleKeyUp,
      { passive: false }
    );
  }

  off() {
    if (this._unBurgerClick) {
      this._unBurgerClick();
    }

    if (this._unResize) {
      this._unResize();
    }

    if (this._unCloseEscape) {
      this._unCloseEscape();
    }

    this.offContextEnabled();
  }

  _handleBurgerClick = e => {
    e.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  _handleResize = () => {
    this.close();
  };

  _handleKeyUp = e => {
    const { key, keyCode } = e;
    const isEscape =
      key === EVENTS.ESCAPE || key === EVENTS.ESC || keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this.close();
    }
  };

  open = e => {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    // @TODO: quick fix for scroll position
    // turns out it needs to scroll to sticky elements holder
    // turns out further, that this triggers scroll events
    const y = posY(this.wcNode);

    if (y !== 0 && y !== getScrollTop()) {
      publish("sticky-container/freeze-direction");
      // @TODO: This scroll to the `axa-sticky` parent node, should be selectable or contextual
      scrollTo(this.wcNode.parentNode.parentNode.parentNode.parentNode);
      requestAnimationFrame(() => {
        setTimeout(() => {
          publish("sticky-container/thaw-direction");
        }, 50);
      });
    }

    add(this.burger, this.options.burgerState);

    if (!e && this._contextNode) {
      publish("header-mobile/open", null, this._contextNode);
    }
  };

  close = e => {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    remove(this.burger, this.options.burgerState);

    if (!e && this._contextNode) {
      publish("header-mobile/close", null, this._contextNode);
    }
  };

  destroy() {
    this.off();

    delete this.burger;
  }
}

export default Burger;
