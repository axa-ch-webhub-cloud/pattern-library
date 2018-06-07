import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var withShadow = function withShadow(Base) {
  return (
    /**
     * Base class {WithShadow}. This class extends the {Base} and
     * applies a shadow dom to it. Please be aware that only a few browser
     * implements this correctly. With other browser works as well, apart of the global contamination.
     * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
     * inners class as it has only one DOM.
     *
     * https://caniuse.com/#feat=shadowdom
     */
    function (_Base) {
      _inherits(WithShadow, _Base);

      // @todo: still need to implement incremental rendering for shadow DOM
      function WithShadow() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref$mode = _ref.mode,
            mode = _ref$mode === undefined ? 'open' : _ref$mode,
            options = _objectWithoutProperties(_ref, ['mode']);

        _classCallCheck(this, WithShadow);

        var _this = _possibleConstructorReturn(this, (WithShadow.__proto__ || _Object$getPrototypeOf(WithShadow)).call(this, options));

        _this._appendStyles = function () {
          _this._appendStylesProxy(_this._shadowRoot);
        };

        var shadowRoot = _this.attachShadow({ mode: mode });

        _this._shadowRoot = shadowRoot;

        // cache class _appendStyles of withStyles to append to shadow root
        _this._appendStylesProxy = _this._appendStyles;
        return _this;
      }

      // proxy _appendStyles of withStyles to append to shadow root


      return WithShadow;
    }(Base)
  );
};

export default withShadow;