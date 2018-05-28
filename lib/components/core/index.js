function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
import wcdomready from '../../js/wcdomready';

var AXACore = function (_CustomElement2) {
  babelHelpers.inherits(AXACore, _CustomElement2);

  function AXACore() {
    babelHelpers.classCallCheck(this, AXACore);
    return babelHelpers.possibleConstructorReturn(this, (AXACore.__proto__ || Object.getPrototypeOf(AXACore)).apply(this, arguments));
  }

  babelHelpers.createClass(AXACore, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var iconPath = this.getAttribute('icons-path');
      if (iconPath) {
        var httpObj = new XMLHttpRequest();
        httpObj.open('GET', iconPath, true);
        httpObj.send();
        httpObj.onload = function () {
          var div = document.createElement('div');
          div.innerHTML = httpObj.responseText;
          div.style.display = 'none';
          document.body.insertBefore(div, document.body.childNodes[0]);
        };
      }
    }
  }]);
  return AXACore;
}(_CustomElement);

wcdomready(function () {
  window.customElements.define('axa-core', AXACore);
});

export default AXACore;