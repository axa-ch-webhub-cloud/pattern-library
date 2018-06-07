import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import { publish, subscribe } from '../../pubsub';
import lifecycleLogger from '../utils/lifecycle-logger';

var withContext = function withContext(Base) {
  return (
    /**
     * Adds the ability to provide and consume contextual data.
     */
    function (_Base) {
      _inherits(WithContext, _Base);

      function WithContext() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WithContext);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithContext.__proto__ || _Object$getPrototypeOf(WithContext)).call.apply(_ref, [this].concat(args))), _this), _this._makeContextReady = function () {
          var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              contextName = _ref2.detail;

          if (_this.contextNode) {
            clearTimeout(_this.timeoutId);
            _this.timeoutId = setTimeout(function () {
              if (ENV !== PROD) {
                lifecycleLogger(_this.logLifecycle)('contextCallback -> ' + _this.nodeName + '#' + _this._id + ' <- context: ' + contextName);
              }

              _this.contextCallback(_this.contextNode, contextName);
            }, 10);
          }

          if (_this.unContextEnabled) {
            _this.unContextEnabled();
          }

          _this.unContextEnabled = subscribe('context/available', _this._makeContextReady);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithContext, [{
        key: 'connectedCallback',

        /**
         * connectedCallback - description
         *
         * @return {type}  description
         */
        value: function connectedCallback() {
          if (_get(WithContext.prototype.__proto__ || _Object$getPrototypeOf(WithContext.prototype), 'connectedCallback', this)) {
            _get(WithContext.prototype.__proto__ || _Object$getPrototypeOf(WithContext.prototype), 'connectedCallback', this).call(this);
          }

          if (this.contextCallback) {
            this._makeContextReady();
          }
        }

        /**
         * disconnectedCallback - description
         *
         * @return {type}  description
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          if (_get(WithContext.prototype.__proto__ || _Object$getPrototypeOf(WithContext.prototype), 'disconnectedCallback', this)) {
            _get(WithContext.prototype.__proto__ || _Object$getPrototypeOf(WithContext.prototype), 'disconnectedCallback', this).call(this);
          }

          if (this.unContextEnabled) {
            this.unContextEnabled();
          }
        }

        // @TODO: atm no data can be shared by enabling context, though this could be necessary
        /**
         * Provides an opt-in contextual scope for hierarchy-agnostic child components.
         */

      }, {
        key: 'provideContext',
        value: function provideContext() {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('provideContext -> ' + this.nodeName + '#' + this._id);
          }

          var contextName = this.nodeName.toLowerCase();

          this.__isContext = true;
          this.__contextName = contextName;

          // publish context/enabled with contextual node name
          publish('context/available', contextName);
        }

        /**
         * Opt-in to select a specific context by component name.
         *
         * @param {String} name - `nodeName` of the desired contextual node.
         */

      }, {
        key: 'consumeContext',
        value: function consumeContext(name) {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('consumeContext -> ' + this.nodeName + '#' + this._id + ' <- context: ' + name);
          }

          this.__consumedContext = name && name.toLowerCase();
        }

        /**
         * Poll `contextNode` until it is available.
         *
         * @param contextName - Lowercase `nodeName` of the contextual node.
         * @private
         */

      }, {
        key: 'contextNode',


        /**
         * Returns contextual scope, if defined by any parent component.
         *
         * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
         */
        get: function get() {
          var __consumedContext = this.__consumedContext;
          var parentNode = this.parentNode;


          while (parentNode && (!parentNode.__isContext || __consumedContext && __consumedContext !== parentNode.__contextName)) {
            // eslint-disable-next-line prefer-destructuring
            parentNode = parentNode.parentNode;
          }

          return parentNode && parentNode.__isContext ? parentNode : false;
        }
      }]);

      return WithContext;
    }(Base)
  );
};

export default withContext;