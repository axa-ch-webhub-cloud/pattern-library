import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';
import AccordionItem from './js/accordion-item';

var AXAAccordionItem = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAAccordionItem, _BaseComponentGlobal);
  babelHelpers.createClass(AXAAccordionItem, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['icon', 'header', 'header-secondary', 'header-color', 'multiple'];
    }
  }]);

  function AXAAccordionItem() {
    babelHelpers.classCallCheck(this, AXAAccordionItem);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAAccordionItem.__proto__ || Object.getPrototypeOf(AXAAccordionItem)).call(this, styles, template));

    _this.selectContext('axa-accordion');
    return _this;
  }

  babelHelpers.createClass(AXAAccordionItem, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAAccordionItem.prototype.__proto__ || Object.getPrototypeOf(AXAAccordionItem.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-accordion-item';

      this.interaction = new AccordionItem(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAAccordionItem.prototype.__proto__ || Object.getPrototypeOf(AXAAccordionItem.prototype), 'disconnectedCallback', this).call(this);

      this.interaction.destroy();
      delete this.interaction;
    }
  }, {
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      this.interaction.contextNode = contextNode;
    }
  }]);
  return AXAAccordionItem;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-accordion-item', AXAAccordionItem);
});

export default AXAAccordionItem;