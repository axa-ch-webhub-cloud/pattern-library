import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
var withStyles = function withStyles(Base) {
  return (
    /**
     * Appends an optional custom element's stylesheet to the document.
     */
    function (_Base) {
      _inherits(WithStyles, _Base);

      function WithStyles() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _ref$styles = _ref.styles,
            styles = _ref$styles === undefined ? '' : _ref$styles,
            options = _objectWithoutProperties(_ref, ['styles']);

        _classCallCheck(this, WithStyles);

        var _this = _possibleConstructorReturn(this, (WithStyles.__proto__ || _Object$getPrototypeOf(WithStyles)).call(this, options));

        _this._styles = styles;
        return _this;
      }
      /**
       * connectedCallback - description
       *
       * @return {type}  description
       */


      _createClass(WithStyles, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
          if (_get(WithStyles.prototype.__proto__ || _Object$getPrototypeOf(WithStyles.prototype), 'connectedCallback', this)) {
            _get(WithStyles.prototype.__proto__ || _Object$getPrototypeOf(WithStyles.prototype), 'connectedCallback', this).call(this);
          }

          this._appendStyles();
        }

        /**
         * Append styles as inline `<style>` tag.
         *
         * @param {Element} [el=this] - The DOM Element where to append the CSS styles.
         * @private
         */

      }, {
        key: '_appendStyles',
        value: function _appendStyles() {
          var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

          if (this._styles) {
            var styleNode = document.createElement('style');
            var styleText = document.createTextNode(this._styles);

            styleNode.appendChild(styleText);

            if (el.insertAdjacentElement) {
              el.insertAdjacentElement('afterbegin', styleNode);
            } else {
              el.appendChild(styleNode);
            }
          }
        }
      }]);

      return WithStyles;
    }(Base)
  );
};

export default withStyles;