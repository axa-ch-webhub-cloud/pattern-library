import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Reflect$construct from 'babel-runtime/core-js/reflect/construct';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

function _CustomElement() {
  return _Reflect$construct(HTMLElement, [], this.__proto__.constructor);
}

;

_Object$setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);

_Object$setPrototypeOf(_CustomElement, HTMLElement);

import wcdomready from '../../js/wcdomready';

var AXACore = function (_CustomElement2) {
  _inherits(AXACore, _CustomElement2);

  function AXACore() {
    _classCallCheck(this, AXACore);

    return _possibleConstructorReturn(this, (AXACore.__proto__ || _Object$getPrototypeOf(AXACore)).apply(this, arguments));
  }

  _createClass(AXACore, [{
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

AXACore.tagName = 'axa-core';


wcdomready(function () {
  window.customElements.define(AXACore.tagName, AXACore);
});

export default AXACore;