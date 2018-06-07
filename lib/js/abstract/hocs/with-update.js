import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _set from 'babel-runtime/helpers/set';
import PropertyExistsException from '../utils/property-exists-exception';
import lifecycleLogger from '../utils/lifecycle-logger';
import dasherize from '../../dasherize';
import toProp from '../../to-prop';
import camelize from '../../camelize';
import debounce from '../../debounce';
import getAttribute from '../../get-attribute';

var PROPERTY_WHITELIST = ['title', 'checked', 'disabled'];

var withUpdate = function withUpdate(Base) {
  return (
    /**
     * Adds attribute observation and enables **First Class Props**.
     */
    function (_Base) {
      _inherits(WithUpdate, _Base);

      function WithUpdate(options) {
        _classCallCheck(this, WithUpdate);

        var _this = _possibleConstructorReturn(this, (WithUpdate.__proto__ || _Object$getPrototypeOf(WithUpdate)).call(this, options));

        _this._reduceProps = function (_ref, key) {
          var props = _ref.props,
              shouldUpdate = _ref.shouldUpdate;

          var hasKey = _this._hasKeys[key];

          if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
            throw new PropertyExistsException(key, _this);
          }

          var name = '_' + key;
          var value = props[key];
          var oldValue = _this[name];

          if (!shouldUpdate && !_this.shouldUpdateCallback(value, oldValue)) {
            return {
              props: props,
              shouldUpdate: false
            };
          }

          _this[name] = value;
          _this._props[key] = value;

          if (hasKey) {
            _set(WithUpdate.prototype.__proto__ || _Object$getPrototypeOf(WithUpdate.prototype), key, value, _this);
          }

          return {
            props: props,
            shouldUpdate: true
          };
        };

        _this._isConnected = false;
        _this._props = {};
        _this._hasKeys = {};
        _this.updatedDebounced = debounce(function () {
          return _this.updated && _this.updated();
        }, 50);
        var observedAttributes = _this.constructor.observedAttributes;

        // add DOM property getters/setters for related attributes

        if (Array.isArray(observedAttributes)) {
          observedAttributes.forEach(function (attr) {
            var _obj;

            var key = camelize(attr);
            var hasKey = key in _this;

            if (ENV !== PROD) {
              lifecycleLogger(_this.logLifecycle)('\n<-> apply getter/setter for ' + key + ' by _' + attr);
            }

            if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
              throw new PropertyExistsException(key, _this);
            }

            _this._hasKeys[key] = hasKey;

            // @todo: may we should allow deletion by setting configurable: true
            _Object$defineProperty(_this, key, _obj = {
              get: function get() {
                return this._props[key];
              },
              set: function set(value) {
                // only update the value if it has actually changed
                // and only re-render if it has changed
                if (!this.shouldUpdateCallback(this._props[key], value)) {
                  return;
                }

                this._props[key] = value;

                // sync DOM property if in white list
                if (hasKey) {
                  _set(_obj.__proto__ || _Object$getPrototypeOf(_obj), key, value, this);
                }

                if (this._isConnected && this._hasRendered) {
                  if (ENV !== PROD) {
                    lifecycleLogger(this.logLifecycle)('\n---> setter for ' + key + ' by _' + key);
                  }

                  this.updatedDebounced();
                }
              }
            });
          });
        }
        return _this;
      }

      /**
       * connectedCallback - description
       *
       * @return {type}  description
       */


      _createClass(WithUpdate, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
          var _this2 = this;

          if (_get(WithUpdate.prototype.__proto__ || _Object$getPrototypeOf(WithUpdate.prototype), 'connectedCallback', this)) {
            _get(WithUpdate.prototype.__proto__ || _Object$getPrototypeOf(WithUpdate.prototype), 'connectedCallback', this).call(this);
          }

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('\n^^^ connectedCallback -> ' + this.nodeName + '#' + this._id);
          }

          if (!this._isConnected) {
            this._isConnected = true;

            var observedAttributes = this.constructor.observedAttributes;


            this.initialClassName = this.className;

            if (Array.isArray(observedAttributes)) {
              if (ENV !== PROD) {
                lifecycleLogger(this.logLifecycle)('\n!!! observedAttributes start -> ' + this.nodeName + '#' + this._id);
              }

              observedAttributes.forEach(function (attr) {
                var key = camelize(attr);

                if (_this2.hasAttribute(attr)) {
                  var value = getAttribute(_this2, attr);
                  var hasKey = _this2._hasKeys[key];

                  _this2._props[key] = value;

                  if (hasKey) {
                    _set(WithUpdate.prototype.__proto__ || _Object$getPrototypeOf(WithUpdate.prototype), key, value, _this2);
                  }
                }
              });

              if (ENV !== PROD) {
                lifecycleLogger(this.logLifecycle)('\n??? observedAttributes end -> ' + this.nodeName + '#' + this._id);
              }
            }
          }

          if (this.updated) {
            this.updated();
          }
        }

        /**
         * Default behaviour is to update on attribute addition, change or removal.
         */

      }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('+++ attributeChangedCallback -> ' + this.nodeName + '#' + this._id + ' | ' + name + ' from ' + oldValue + ' to ' + newValue + '\n');
          }

          // only update the value if it has actually changed
          // and only re-render if it has changed
          if (!this.shouldUpdateCallback(newValue, oldValue)) {
            return;
          }

          var key = camelize(name);

          this[key] = toProp(newValue);
        }

        /**
         * A fast and simpler way to update multiple props in one go.
         * Especially useful for integrations and to prevent multiple re-renders.
         *
         * @param {{}} props - DOM properties to be updated.
         */

      }, {
        key: 'setProps',
        value: function setProps(props) {
          var _constructor$observed = this.constructor.observedAttributes,
              observedAttributes = _constructor$observed === undefined ? [] : _constructor$observed;

          var propsKeys = _Object$keys(props);
          var filter = function filter(key) {
            return observedAttributes.indexOf(dasherize(key)) > -1;
          };

          var _propsKeys$filter$red = propsKeys.filter(filter).reduce(this._reduceProps, { props: props, shouldUpdate: false }),
              shouldUpdate = _propsKeys$filter$red.shouldUpdate;

          if (shouldUpdate && this._isConnected && this._hasRendered) {
            if (ENV !== PROD) {
              lifecycleLogger(this.logLifecycle)('\n---> setProps for ' + propsKeys.join(', '));
            }

            if (this.updated) {
              this.updated();
            }
          }
        }

        /**
         * Props reducer for batch processing.
         *
         * @param {{}} props - The properties to be batch processed.
         * @param {Boolean} shouldUpdate - Is re-render necessary?
         * @param {String} key - the current property's key.
         * @returns {{props: {}, shouldUpdate: boolean}} - For the next accumulator iteration.
         */

      }, {
        key: 'shouldUpdateCallback',


        /**
         * Check if a re-render is really necessary.
         * Basic check does a shallow comparison.
         *
         * @param {*} newValue - the new value of an attribute.
         * @param {*} oldValue - the existing value of an attribute.
         * @returns {Boolean} - Returns `true` if attributes have changed, else `false`.
         */
        // eslint-disable-next-line class-methods-use-this
        value: function shouldUpdateCallback(newValue, oldValue) {
          return newValue !== oldValue;
        }

        /**
         * Only morph children of current custom element, not any other custom element.
         *
         * @returns {boolean}
         */

      }, {
        key: 'skipChildren',
        value: function skipChildren() {
          return !this._isMorphing;
        }

        /**
         * disconnectedCallback - description
         *
         * @return {type}  description
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('$$$ disconnectedCallback -> ' + this.nodeName + '#' + this._id + '\n');
          }

          this._isConnected = false;
        }
      }]);

      return WithUpdate;
    }(Base)
  );
};

export default withUpdate;