import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import stylesStickyContainer from './scss/sticky-container.scss';
import stylesSticky from './scss/sticky.scss';
import templateSticky from './sticky.template';
import Sticky from './js/sticky';
import StickyContainer from './js/sticky-container';

var AXAStickyContainer = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAStickyContainer, _BaseComponentGlobal);
  babelHelpers.createClass(AXAStickyContainer, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['debug'];
    }
  }]);

  function AXAStickyContainer() {
    babelHelpers.classCallCheck(this, AXAStickyContainer);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAStickyContainer.__proto__ || Object.getPrototypeOf(AXAStickyContainer)).call(this, stylesStickyContainer));

    _this.enableContext();
    return _this;
  }

  babelHelpers.createClass(AXAStickyContainer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAStickyContainer.prototype.__proto__ || Object.getPrototypeOf(AXAStickyContainer.prototype), 'connectedCallback', this).call(this);

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

var AXASticky = function (_BaseComponentGlobal2) {
  babelHelpers.inherits(AXASticky, _BaseComponentGlobal2);
  babelHelpers.createClass(AXASticky, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['debug'];
    }
  }]);

  function AXASticky() {
    babelHelpers.classCallCheck(this, AXASticky);

    var _this2 = babelHelpers.possibleConstructorReturn(this, (AXASticky.__proto__ || Object.getPrototypeOf(AXASticky)).call(this, stylesSticky, templateSticky));

    _this2.selectContext('axa-sticky-container');
    return _this2;
  }

  babelHelpers.createClass(AXASticky, [{
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

wcdomready(function () {
  window.customElements.define('axa-sticky-container', AXAStickyContainer);
  window.customElements.define('axa-sticky', AXASticky);
});

export default {
  AXASticky: AXASticky,
  AXAStickyContainer: AXAStickyContainer
};