import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import stylesStickyContainer from './scss/sticky-container.scss';
import stylesSticky from './scss/sticky.scss';
import templateSticky from './sticky.template';
import Sticky from './js/sticky';
import StickyContainer from './js/sticky-container';

var AXAStickyContainer = function (_BaseComponentGlobal) {
  _inherits(AXAStickyContainer, _BaseComponentGlobal);

  _createClass(AXAStickyContainer, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['debug'];
    }
  }]);

  function AXAStickyContainer() {
    _classCallCheck(this, AXAStickyContainer);

    var _this = _possibleConstructorReturn(this, (AXAStickyContainer.__proto__ || _Object$getPrototypeOf(AXAStickyContainer)).call(this, { styles: stylesStickyContainer }));

    _this.provideContext();
    return _this;
  }

  _createClass(AXAStickyContainer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAStickyContainer.prototype.__proto__ || _Object$getPrototypeOf(AXAStickyContainer.prototype), 'connectedCallback', this).call(this);

      var debug = this.debug;


      this.className = classnames(this.initialClassName, 'o-sticky-container js-sticky-container', {
        'o-sticky-container--debug': debug
      });

      this.stickyContainer = new StickyContainer(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.stickyContainer) {
        this.stickyContainer.destroy();
        delete this.stickyContainer;
      }
    }
  }]);

  return AXAStickyContainer;
}(BaseComponentGlobal);

AXAStickyContainer.tagName = 'axa-sticky-container';

var AXASticky = function (_BaseComponentGlobal2) {
  _inherits(AXASticky, _BaseComponentGlobal2);

  _createClass(AXASticky, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['debug'];
    }
  }]);

  function AXASticky() {
    _classCallCheck(this, AXASticky);

    var _this2 = _possibleConstructorReturn(this, (AXASticky.__proto__ || _Object$getPrototypeOf(AXASticky)).call(this, { styles: stylesSticky, template: templateSticky }));

    _this2.consumeContext('axa-sticky-container');
    return _this2;
  }

  _createClass(AXASticky, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var debug = this.debug;


      this.className = classnames(this.initialClassName, 'o-sticky js-sticky', {
        'o-sticky--debug': debug
      });
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.sticky) {
        this.sticky.destroy();
      }

      this.sticky = new Sticky(this);

      var contextNode = this.contextNode;


      if (contextNode) {
        this.contextCallback(contextNode);
      }
    }
  }, {
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      if (this.sticky) {
        this.sticky.contextNode = contextNode;
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.sticky) {
        this.sticky.destroy();
        delete this.sticky;
      }
    }
  }]);

  return AXASticky;
}(BaseComponentGlobal);

AXASticky.tagName = 'axa-sticky';


wcdomready(function () {
  window.customElements.define(AXAStickyContainer.tagName, AXAStickyContainer);
  window.customElements.define(AXASticky.tagName, AXASticky);
});

export default {
  AXASticky: AXASticky,
  AXAStickyContainer: AXAStickyContainer
};