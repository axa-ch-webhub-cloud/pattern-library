import Enum from "./enum";
import on from "./on";
import getAttribute from "./get-attribute";
import outer from "./outer";

export const EVENTS = Enum(
  "click",
  "change",
  "keyup",
  "enter",
  "move",
  "leave",
  "Escape",
  "Esc",
  "touchstart",
  "touchmove",
  "touchend",
  "input",
  "resize",
  "paste"
);

// TODO use another system for ENUMs as this one does convert axa-change into AXA-CHANGE which is a problem when using it
export const AXA_EVENTS = {
  AXA_CLICK: "axa-click",
  AXA_LOAD: "axa-load",
  AXA_RENDER: "axa-render",
  AXA_CHANGE: "axa-change",
  AXA_VALIDATION: "axa-validation",
  AXA_SWIPE_UP: "axa-swipe-up",
  AXA_SWIPE_DOWN: "axa-swipe-down",
  AXA_SWIPE_LEFT: "axa-swipe-left",
  AXA_SWIPE_RIGHT: "axa-swipe-right"
};

/**
 * This is the data attribute that can be set on a DOM element and enforces prevent default.
 * It only works only for childrens of the events!
 */
const DATA_PREVENT_DEFAULT = "data-prevent-default";

/**
 * General purpose UI Event handling abstraction, it basically has two modes:
 * - **interactive**
 * - **non-interactive**
 *
 * Certain actions trigger interactive mode and others leave it.
 */
class UiEvents {
  /**
   * Default options of UIEvents
   *
   * @type {Object}
   * @property {String} containerClass - A CSS class selector, if the container is not the WebComponent's node itself.
   * @property {String} toggleClass - A CSS class selector for a dom node which toggle interaction mode.
   * @property {String} closeClass - A CSS class selector which makes the component non-interactive upon an event.
   * @property {Boolean} escapeClose - Does hitting `Esc` make this component non-interactive?
   * @property {Boolean} outerClose - Does clicking outside of this component make it non-interactive?
   * @property {Boolean} sameClickClose - Does clicking the `toggleClass` node of this component toggle non-interactive?
   * @property {Boolean} preventDefault - Is the default event action prevent?
   */
  static DEFAULTS = {
    containerClass: ".js-ui-container",
    toggleClass: "js-ui-toggle",
    closeClass: "js-ui-close",
    escapeClose: true,
    outerClose: true,
    sameClickClose: true,
    preventDefault: true
  };

  /**
   * Constructor of UI-Events
   *
   * @param {Element} wcNode - The WebComponent's root node.
   * @param {UiEvents.DEFAULTS} options - Options ovvering the defaults.
   */
  constructor(wcNode, options = {}) {
    this._init(wcNode, options);
  }

  // @todo: may this API needs to be refactored from direct instantiation to lazy instantiation
  _init(wcNode, options) {
    if (wcNode) {
      this._wcNode = wcNode;
    }

    if (options) {
      this._options = {
        ...UiEvents.DEFAULTS,
        ...options
      };
    }

    const { containerClass } = this._options;

    this._container = containerClass
      ? this._wcNode.querySelector(containerClass)
      : this._wcNode;

    this._on();
  }

  _on() {
    this._off();

    this._unClick = on(
      this._container,
      EVENTS.CLICK,
      this._options.toggleClass,
      this._handleClick,
      {
        passive: !this._options.preventDefault
      }
    );
  }

  _off() {
    if (this._unClick) {
      this._unClick();
    }

    this._offInteractive();
  }

  _onInteractive() {
    this._offInteractive();

    const {
      _container,
      _options: { closeClass, outerClose, escapeClose, preventDefault }
    } = this;

    if (closeClass) {
      this._unCloseClick = on(
        _container,
        EVENTS.CLICK,
        closeClass,
        this._handleClose,
        {
          passive: !preventDefault
        }
      );
    }

    if (outerClose) {
      this._unOuterClick = outer(_container, EVENTS.CLICK, this._handleClose, {
        passive: !preventDefault
      });
    }

    if (escapeClose) {
      this._unCloseEscape = on(
        _container.ownerDocument,
        EVENTS.KEYUP,
        this._handleKeyUp,
        { passive: false }
      );
    }
  }

  shouldPreventDefault(node) {
    const hasAttr = node.hasAttribute(DATA_PREVENT_DEFAULT);
    return hasAttr
      ? getAttribute(node, DATA_PREVENT_DEFAULT)
      : this._options.preventDefault;
  }

  _offInteractive() {
    if (this._unOuterClick) {
      this._unOuterClick();
    }

    if (this._unCloseClick) {
      this._unCloseClick();
    }

    if (this._unCloseEscape) {
      this._unCloseEscape();
    }

    this.deleteLastToggleNode();
  }

  _handleClick = (e, toggleNode) => {
    if (this.shouldPreventDefault(toggleNode || e.currentTarget)) {
      e.preventDefault();
    }

    const isEnter = !this._lastToggleNode;
    const isMove = toggleNode !== this._lastToggleNode;
    const isLeave = !isEnter && !isMove;

    if (isEnter) {
      this._notify(EVENTS.ENTER, toggleNode);

      this._onInteractive();
    } else if (isMove) {
      this._notify(EVENTS.MOVE, toggleNode, this._lastToggleNode);
    }

    this._lastToggleNode = toggleNode;

    if (isLeave && this._options.sameClickClose) {
      this._close();
    }
  };

  _handleClose = (e, closeNode) => {
    if (this.shouldPreventDefault(closeNode || e.currentTarget)) {
      e.preventDefault();
    }

    this._close();
  };

  _handleKeyUp = e => {
    const isEscape =
      e.key === EVENTS.ESCAPE || e.key === EVENTS.ESC || e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this._close();
    }
  };

  _close() {
    if (this._lastToggleNode) {
      this._notify(EVENTS.LEAVE, this._lastToggleNode);

      this._offInteractive();

      this.deleteLastToggleNode();
    }
  }

  _notify(name, toggleNode, lastToggleNode) {
    if (name in this && typeof this[name] === "function") {
      this[name](toggleNode, lastToggleNode);
    }
  }

  /**
   * Overwrite this public method, it get's trigger as soon as your component get's **interactive**.
   *
   * @param {Element} toggleNode - The DOM node upon which an event occurred.
   */
  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  enter(toggleNode) {
    throw new Error("UiEvent.enter method not overwritten");
  }

  /**
   * Optionally overwrite this public method, it get's triggered as soon as your component moves from one **interactive** view to another.
   *
   * @param {Element} toggleNode - The DOM node upon which an event occurred.
   * @param {Element} lastToggleNode - The last DOM node upon which an event occurred.
   */
  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  move(toggleNode, lastToggleNode) {}

  /**
   * Overwrite this public method, it get's trigger as soon as your component get's **non-interactive**.
   *
   * @param {Element} toggleNode - The DOM node upon which an event occurred.
   */
  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  leave(toggleNode) {
    throw new Error("UiEvent.leave method not overwritten");
  }

  destroy() {
    this._off();

    delete this._wcNode;
    delete this._options;
  }

  get lastToggleNode() {
    return this._lastToggleNode;
  }

  deleteLastToggleNode() {
    delete this._lastToggleNode;
  }
}

export default UiEvents;
