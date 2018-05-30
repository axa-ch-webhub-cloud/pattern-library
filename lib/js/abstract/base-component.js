import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Reflect$construct from 'babel-runtime/core-js/reflect/construct';
import _Array$from from 'babel-runtime/core-js/array/from';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _set from 'babel-runtime/helpers/set';

function _CustomElement() {
  return _Reflect$construct(HTMLElement, [], this.__proto__.constructor);
}

;

_Object$setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);

_Object$setPrototypeOf(_CustomElement, HTMLElement);

import nanomorph from './component-morph';
import { isSameNodeOnce, clearIsSameNode } from './is-same-node-once';
import getAttribute from '../get-attribute';
import toProp from '../to-prop';
import { publish, subscribe } from '../pubsub';
import debounce from '../debounce';
import camelize from '../camelize';
import dasherize from '../dasherize';
import maybe from '../maybe';
import PropertyExistsException from './property-exists-exception';

var THROWED_ERROR = 'throwed';
var PROPERTY_WHITELIST = ['title', 'checked', 'disabled'];
var ids = {};
var getId = function getId(nodeName) {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};
var lifecycleLogger = maybe(function () {
  var _console;

  return (_console = console).log.apply(_console, arguments);
})()(true);

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 *
 * **Light DOM**
 * The light DOM are the provided children from the users of your component (light meaning easy to digest).
 *
 * ```html
 * <axa-example>
 *   <div>This is some light DOM for axa-example</div>
 * </axa-example>
 * ```
 *
 * **Local DOM**
 * The local DOM is the DOM tree rendered by the component itself (in our case provided by `template`).
 *
 * ```js
 * export default function(props, childrenFragment) {
 *   return nanohtml`<article>
 *     ${childrenFragment} <!-- light DOM injection point -->
 *   </article>`;
 * }
 * ```
 *
 * **Flattened DOM**
 * The flattened DOM is the final product where the user's light DOM is injected into the Components local DOM.
 *
 * ```html
 * <axa-example>
 *   <article>
 *     <div>This is some light DOM for axa-example</div> <!-- light DOM injection point -->
 *   </article>
 * </axa-example>
 * ```
 */

var BaseComponent = function (_CustomElement2) {
  _inherits(BaseComponent, _CustomElement2);

  function BaseComponent() {
    var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var template = arguments[1];

    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || _Object$getPrototypeOf(BaseComponent)).call(this));

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
        _set(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), key, value, _this);
      }

      return {
        props: props,
        shouldUpdate: true
      };
    };

    _this._makeContextReady = function () {
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

      _this.unContextEnabled = subscribe('context/enabled', _this._makeContextReady);
    };

    _this._initialise(styles, template);
    _this._id = getId(_this.nodeName);
    _this._props = {};
    _this._hasKeys = {};
    _this.reRender = debounce(function () {
      return _this.render();
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
            return this['_' + key];
          },
          set: function set(value) {
            var name = '_' + key;

            // only update the value if it has actually changed
            // and only re-render if it has changed
            if (!this.shouldUpdateCallback(this[name], value)) {
              return;
            }

            this[name] = value;
            this._props[key] = value;

            if (hasKey) {
              _set(_obj.__proto__ || _Object$getPrototypeOf(_obj), key, value, this);
            }

            if (this._isConnected && this._hasRendered) {
              if (ENV !== PROD) {
                lifecycleLogger(this.logLifecycle)('\n---> setter for ' + key + ' by _' + key);
              }

              this.reRender();
            }
          }
        });
      });
    }
    return _this;
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */


  _createClass(BaseComponent, [{
    key: '_initialise',
    value: function _initialise(styles) {
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this._styles = styles;
      this._template = template;
      this._hasTemplate = !!template;
      this._hasRendered = false;
      this._isConnected = false;
    }

    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

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
              var name = '_' + key;

              _this2[name] = value;
              _this2._props[key] = value;

              if (hasKey) {
                _set(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), key, value, _this2);
              }
            }
          });

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)('\n??? observedAttributes end -> ' + this.nodeName + '#' + this._id);
          }
        }
      }

      this._appendStyles();
      this.render();

      if (this.contextCallback) {
        this._makeContextReady();
      }
    }

    /**
     * Default behaviour is to re-render on attribute addition, change or removal.
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
    key: 'batchProps',
    value: function batchProps(props) {
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
          lifecycleLogger(this.logLifecycle)('\n---> batchProps for ' + propsKeys.join(', '));
        }

        this.render();
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

      if (this.unContextEnabled) {
        this.unContextEnabled();
      }

      this._isConnected = false;
    }
    /**
     * _appendStyles - description
     *
     * @return {type}  description
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

    /**
     * render - method can be overwritten and is called right after the component is connected
     * @TODO how to deal with re-renders, e.g. triggered by `attributeChangedCallback` or observed DOM
     *
     * @return {type}  description
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // eslint-disable-line
      var initial = !this._hasRendered;

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)('willRenderCallback -> ' + this.nodeName + '#' + this._id + ' <- initial: ' + initial);
      }

      this.willRenderCallback(initial);

      if (this._hasTemplate) {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)('render -> ' + this.nodeName + '#' + this._id + ' <- initial: ' + initial);
        }

        var template = this._template;


        try {
          // At initial rendering -> collect the light DOM first
          if (initial) {
            var childrenFragment = document.createDocumentFragment();
            var lightDOMRefs = [];

            while (this.firstChild) {
              lightDOMRefs.push(this.firstChild);
              childrenFragment.appendChild(this.firstChild);
            }

            this._lightDOMRefs = lightDOMRefs;
            this.childrenFragment = childrenFragment;
          } else {
            // Reuse the light DOM for subsequent rendering
            this._lightDOMRefs.forEach(function (ref) {
              // Important: Once the light DOM is live it shouldn't be moved out
              // instead make sure to clone it for incremental updates
              var refClone = ref.cloneNode(true);

              // Another piece of code is managing that part of the DOM tree.
              isSameNodeOnce(ref);
              isSameNodeOnce(refClone);

              // Note: DocumentFragments always get emptied after being appended to another document (they get moved)
              // so we can always reuse this
              _this3.childrenFragment.appendChild(refClone);
            });
          }

          var items = template(this._props, this.childrenFragment);
          var renderFragment = document.createDocumentFragment();

          if (Array.isArray(items)) {
            items.forEach(function (item) {
              renderFragment.appendChild(item);
            });
          } else if (items) {
            if (typeof items === 'string') {
              var err = new Error(THROWED_ERROR);
              // @TODO: implement log system
              console.error( // eslint-disable-line
              '\n%cWeb Component %c' + this.nodeName + '%c#' + this._id + ' does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ' + err.stack + '\n', // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;', 'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;', 'color: #580000; font-size: 14px; line-height:16px;');
              throw err;
            }
            renderFragment.appendChild(items);
          }

          if (initial) {
            _get(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), 'appendChild', this).call(this, renderFragment);
          } else {
            var wcClone = this.cloneNode(false);

            if (ENV !== PROD) {
              lifecycleLogger(this.logLifecycle)('+++ incremental update -> ' + this.nodeName + '#' + this._id + '\n');
            }

            wcClone._isMorphing = true;
            wcClone.appendChild(renderFragment);

            this._isMorphing = true;
            nanomorph(this, wcClone);
            clearIsSameNode();
            this._isMorphing = false;
          }
        } catch (err) {
          if (err.message !== THROWED_ERROR) {
            console.error( // eslint-disable-line
            '\n%cWeb Component %c' + this.nodeName + '%c#' + this._id + ' has an error while loading its template:\n' + err + '\n\nStack Trace: ' + err.stack + '\n', 'color: #580000; font-size: 14px; line-height:16px;', 'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;', 'color: #580000; font-size: 14px; line-height:16px;');
          }
        }
      }

      this._hasRendered = true;

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)('didRenderCallback -> ' + this.nodeName + '#' + this._id + ' <- initial: ' + initial);
      }

      this.didRenderCallback(initial);
    }

    /**
     * Optionally overwrite this public method, it get's triggered as soon as your component will render.
     * Here you will cleanup your lost DOM references or their associated events or stuff like that.
     *
     * @param [Boolean] initial - Whether or not this was the first render of this component.
     */

  }, {
    key: 'willRenderCallback',
    value: function willRenderCallback(initial) {} // eslint-disable-line

    /**
     * Optionally overwrite this public method, it get's triggered as soon as your component did render.
     * Here you will reattach your lost DOM references and events or stuff like that.
     *
     * @param [Boolean] initial - Whether or not this was the first render of this component.
     */

  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback(initial) {} // eslint-disable-line

    /**
     * Monkey patch `innerText` API to re-rendering.
     *
     * @param {String} text
     */

  }, {
    key: 'appendChild',


    /**
     * Monkey patch `appendChild` API to re-rendering.
     *
     * @param {Element} node
     */
    value: function appendChild(node) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        _get(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), 'appendChild', this).call(this, node);
        return;
      }

      this._lightDOMRefs.push(node);

      this.render();
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

    // @TODO: atm no data can be shared by enabling context, though this could be necessary
    /**
     * Provides an opt-in contextual scope for hierarchy-agnostic child components.
     */

  }, {
    key: 'enableContext',
    value: function enableContext() {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)('enableContext -> ' + this.nodeName + '#' + this._id);
      }

      var contextName = this.nodeName.toLowerCase();

      this.__isContext = true;
      this.__contextName = contextName;

      // publish context/enabled with contextual node name
      publish('context/enabled', contextName);
    }

    /**
     * Opt-in to select a specific context by component name.
     *
     * @param name
     */

  }, {
    key: 'selectContext',
    value: function selectContext(name) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)('selectContext -> ' + this.nodeName + '#' + this._id + ' <- context: ' + name);
      }

      this.__selectedContext = name && name.toLowerCase();
    }
  }, {
    key: 'innerText',
    set: function set(text) {
      if (!this._hasTemplate || !this._hasRendered) {
        _set(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), 'innerText', text, this);
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
        _set(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), 'textContent', text, this);
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
        _set(BaseComponent.prototype.__proto__ || _Object$getPrototypeOf(BaseComponent.prototype), 'innerHTML', html, this);
        return;
      }

      var div = document.createElement('div');

      div.innerHTML = html;

      this._lightDOMRefs = _Array$from(div.children);

      this.render();
    }
  }, {
    key: 'contextNode',


    /**
     * Returns contextual scope, if defined by any parent component.
     *
     * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
     */
    get: function get() {
      var __selectedContext = this.__selectedContext;
      var parentNode = this.parentNode;


      while (parentNode && (!parentNode.__isContext || __selectedContext && __selectedContext !== parentNode.__contextName)) {
        // eslint-disable-next-line prefer-destructuring
        parentNode = parentNode.parentNode;
      }

      return parentNode && parentNode.__isContext ? parentNode : false;
    }
  }], [{
    key: 'uuidv4',
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line
        return v.toString(16);
      });
    }
  }]);

  return BaseComponent;
}(_CustomElement);

export default BaseComponent;