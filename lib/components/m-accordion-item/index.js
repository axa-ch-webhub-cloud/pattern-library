import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';
import AccordionItem from './js/accordion-item';

var AXAAccordionItem = function (_BaseComponentGlobal) {
  _inherits(AXAAccordionItem, _BaseComponentGlobal);

  _createClass(AXAAccordionItem, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['icon', 'header', 'header-secondary', 'header-color', 'multiple'];
    }
  }]);

  function AXAAccordionItem() {
    _classCallCheck(this, AXAAccordionItem);

    var _this = _possibleConstructorReturn(this, (AXAAccordionItem.__proto__ || _Object$getPrototypeOf(AXAAccordionItem)).call(this, { styles: styles, template: template }));

    _this.consumeContext('axa-accordion');
    return _this;
  }

  _createClass(AXAAccordionItem, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAAccordionItem.prototype.__proto__ || _Object$getPrototypeOf(AXAAccordionItem.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-accordion-item';

      this.interaction = new AccordionItem(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(AXAAccordionItem.prototype.__proto__ || _Object$getPrototypeOf(AXAAccordionItem.prototype), 'disconnectedCallback', this).call(this);

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

AXAAccordionItem.tagName = 'axa-accordion-item';


wcdomready(function () {
  window.customElements.define(AXAAccordionItem.tagName, AXAAccordionItem);
});

export default AXAAccordionItem;