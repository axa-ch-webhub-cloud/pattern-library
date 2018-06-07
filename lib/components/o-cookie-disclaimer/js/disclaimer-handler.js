import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import on from '../../../js/on';

var _global = window || global;

var DisclaimerHandler = function () {
  function DisclaimerHandler(wcNode) {
    _classCallCheck(this, DisclaimerHandler);

    this.wcNode = wcNode;
    this._off = null;
  }

  _createClass(DisclaimerHandler, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._off = on(this.wcNode.querySelector('.js-cookie-disclaimer__button'), 'click', function () {
        _this.cleanupWcNode();
        var localStorage = _global.localStorage;

        if (localStorage) {
          localStorage.setItem('axa-ch-cookie-disclaimer-accepted', new Date().getTime());
        }
      });
    }
  }, {
    key: 'cleanupWcNode',
    value: function cleanupWcNode() {
      this.wcNode.parentNode.removeChild(this.wcNode);
    }
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'hasAccepted',
    value: function hasAccepted() {
      var localStorage = _global.localStorage;

      return !!localStorage.getItem('axa-ch-cookie-disclaimer-accepted');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (typeof this._off === 'function') {
        this._off();
      }
      delete this.wcNode;
    }
  }, {
    key: 'off',
    get: function get() {
      return this._off;
    }
  }]);

  return DisclaimerHandler;
}();

export default DisclaimerHandler;