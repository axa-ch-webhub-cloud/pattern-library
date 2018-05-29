import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import Enum from './enum';
import on from './on';
import getAttribute from './get-attribute';
import outer from './outer';

var EVENTS = Enum('click', 'keyup', 'enter', 'move', 'leave', 'Escape', 'Esc');

/**
 * This is the data attribute that can be set on a DOM element and enforces prevent default.
 * It only works only for childrens of the events!
 */
var DATA_PREVENT_DEFAULT = 'data-prevent-default';

/**
 * General purpose UI Event handling abstraction, it basically has two modes:
 * - **interactive**
 * - **non-interactive**
 *
 * Certain actions trigger interactive mode and others leave it.
 */

var UiEvents = function () {

  /**
   * Constructor of UI-Events
   *
   * @param {Element} wcNode - The WebComponent's root node.
   * @param {UiEvents.DEFAULTS} options - Options ovvering the defaults.
   */
  function UiEvents(wcNode) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, UiEvents);

    this._handleClick = function (e, toggleNode) {
      if (_this.shouldPreventDefault(toggleNode || e.currentTarget)) {
        e.preventDefault();
      }

      var isEnter = !_this._lastToggleNode;
      var isMove = toggleNode !== _this._lastToggleNode;
      var isLeave = !isEnter && !isMove;

      if (isEnter) {
        _this._notify(EVENTS.ENTER, toggleNode);

        _this._onInteractive();
      } else if (isMove) {
        _this._notify(EVENTS.MOVE, toggleNode, _this._lastToggleNode);
      }

      _this._lastToggleNode = toggleNode;

      if (isLeave && _this._options.sameClickClose) {
        _this._close();
      }
    };

    this._handleClose = function (e, closeNode) {
      if (_this.shouldPreventDefault(closeNode || e.currentTarget)) {
        e.preventDefault();
      }

      _this._close();
    };

    this._handleKeyUp = function (e) {
      var isEscape = e.key === EVENTS.ESCAPE || e.key === EVENTS.ESC || e.keyCode === 27;

      if (isEscape) {
        e.preventDefault();

        _this._close();
      }
    };

    this._init(wcNode, options);
  }

  // @todo: may this API needs to be refactored from direct instantiation to lazy instantiation

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


  _createClass(UiEvents, [{
    key: '_init',
    value: function _init(wcNode, options) {
      if (wcNode) {
        this._wcNode = wcNode;
      }

      if (options) {
        this._options = _extends({}, UiEvents.DEFAULTS, options);
      }

      var containerClass = this._options.containerClass;


      this._container = containerClass ? this._wcNode.querySelector(containerClass) : this._wcNode;

      this._on();
    }
  }, {
    key: '_on',
    value: function _on() {
      this._off();

      this._unClick = on(this._container, EVENTS.CLICK, this._options.toggleClass, this._handleClick, { passive: !this._options.preventDefault });
    }
  }, {
    key: '_off',
    value: function _off() {
      if (this._unClick) {
        this._unClick();
      }

      this._offInteractive();
    }
  }, {
    key: '_onInteractive',
    value: function _onInteractive() {
      this._offInteractive();

      if (this._options.closeClass) {
        this._unCloseClick = on(this._container, EVENTS.CLICK, this._options.closeClass, this._handleClose, { passive: !this._options.preventDefault });
      }

      if (this._options.outerClose) {
        this._unOuterClick = outer(this._container, EVENTS.CLICK, this._handleClose, { passive: !this._options.preventDefault });
      }

      if (this._options.escapeClose) {
        this._unCloseEscape = on(this._container.ownerDocument, EVENTS.KEYUP, this._handleKeyUp, { passive: false });
      }
    }
  }, {
    key: 'shouldPreventDefault',
    value: function shouldPreventDefault(node) {
      var hasAttr = node.hasAttribute(DATA_PREVENT_DEFAULT);
      return hasAttr ? getAttribute(node, DATA_PREVENT_DEFAULT) : this._options.preventDefault;
    }
  }, {
    key: '_offInteractive',
    value: function _offInteractive() {
      if (this._unOuterClick) {
        this._unOuterClick();
      }

      if (this._unCloseClick) {
        this._unCloseClick();
      }

      if (this._unCloseEscape) {
        this._unCloseEscape();
      }

      delete this._lastToggleNode;
    }
  }, {
    key: '_close',
    value: function _close() {
      if (this._lastToggleNode) {
        this._notify(EVENTS.LEAVE, this._lastToggleNode);

        this._offInteractive();

        delete this._lastToggleNode;
      }
    }
  }, {
    key: '_notify',
    value: function _notify(name, toggleNode, lastToggleNode) {
      if (name in this && typeof this[name] === 'function') {
        this[name](toggleNode, lastToggleNode);
      }
    }

    /**
     * Overwrite this public method, it get's trigger as soon as your component get's **interactive**.
     *
     * @param {Element} toggleNode - The DOM node upon which an event occurred.
     */
    // eslint-disable-next-line no-unused-vars, class-methods-use-this

  }, {
    key: 'enter',
    value: function enter(toggleNode) {
      throw new Error('UiEvent.enter method not overwritten');
    }

    /**
     * Optionally overwrite this public method, it get's triggered as soon as your component moves from one **interactive** view to another.
     *
     * @param {Element} toggleNode - The DOM node upon which an event occurred.
     * @param {Element} lastToggleNode - The last DOM node upon which an event occurred.
     */
    // eslint-disable-next-line no-unused-vars, class-methods-use-this

  }, {
    key: 'move',
    value: function move(toggleNode, lastToggleNode) {}

    /**
     * Overwrite this public method, it get's trigger as soon as your component get's **non-interactive**.
     *
     * @param {Element} toggleNode - The DOM node upon which an event occurred.
     */
    // eslint-disable-next-line no-unused-vars, class-methods-use-this

  }, {
    key: 'leave',
    value: function leave(toggleNode) {
      throw new Error('UiEvent.leave method not overwritten');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._off();

      delete this._wcNode;
      delete this._options;
    }
  }]);

  return UiEvents;
}();

UiEvents.DEFAULTS = {
  containerClass: '.js-ui-container',
  toggleClass: 'js-ui-toggle',
  closeClass: 'js-ui-close',
  escapeClose: true,
  outerClose: true,
  sameClickClose: true,
  preventDefault: true
};


export default UiEvents;