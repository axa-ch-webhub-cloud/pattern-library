import _Array$from from 'babel-runtime/core-js/array/from';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _set from 'babel-runtime/helpers/set';
import _inherits from 'babel-runtime/helpers/inherits';
var withMonkeyPatches = function withMonkeyPatches(Base) {
  return (
    /**
     * Guarantees that updates to the custom element's children do not mess up the **Flattened DOM** and keeps it's **Local DOM** untouched
     *
     * **Note:** this is obsolete if `ShadowDOM` is enabled.
     */
    function (_Base) {
      _inherits(WithMonkeyPatches, _Base);

      function WithMonkeyPatches() {
        _classCallCheck(this, WithMonkeyPatches);

        return _possibleConstructorReturn(this, (WithMonkeyPatches.__proto__ || _Object$getPrototypeOf(WithMonkeyPatches)).apply(this, arguments));
      }

      _createClass(WithMonkeyPatches, [{
        key: 'appendChild',


        /**
         * Monkey patch `appendChild` API to re-rendering.
         *
         * @param {Element} node
         */
        value: function appendChild(node) {
          if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
            _get(WithMonkeyPatches.prototype.__proto__ || _Object$getPrototypeOf(WithMonkeyPatches.prototype), 'appendChild', this).call(this, node);
            return;
          }

          this._lightDOMRefs.push(node);

          this.render();
        }
      }, {
        key: 'innerText',

        /**
         * Monkey patch `innerText` API to re-rendering.
         *
         * @param {String} text
         */
        set: function set(text) {
          if (!this._hasTemplate || !this._hasRendered) {
            _set(WithMonkeyPatches.prototype.__proto__ || _Object$getPrototypeOf(WithMonkeyPatches.prototype), 'innerText', text, this);
            return;
          }

          var textNode = document.createTextNode(text);

          this._lightDOMRefs = [textNode];

          this.render();
        }

        /**
         * Monkey patch `textContent` API to re-rendering.
         *
         * @param {String} text
         */

      }, {
        key: 'textContent',
        set: function set(text) {
          if (!this._hasTemplate || !this._hasRendered) {
            _set(WithMonkeyPatches.prototype.__proto__ || _Object$getPrototypeOf(WithMonkeyPatches.prototype), 'textContent', text, this);
            return;
          }

          var textNode = document.createTextNode(text);

          this._lightDOMRefs = [textNode];

          this.render();
        }

        /**
         * Monkey patch `innerHTML` API to re-rendering.
         *
         * @param {String} html
         */

      }, {
        key: 'innerHTML',
        set: function set(html) {
          if (!this._hasTemplate || !this._hasRendered) {
            _set(WithMonkeyPatches.prototype.__proto__ || _Object$getPrototypeOf(WithMonkeyPatches.prototype), 'innerHTML', html, this);
            return;
          }

          var div = document.createElement('div');

          div.innerHTML = html;

          this._lightDOMRefs = _Array$from(div.children);

          this.render();
        }
      }]);

      return WithMonkeyPatches;
    }(Base)
  );
};

export default withMonkeyPatches;