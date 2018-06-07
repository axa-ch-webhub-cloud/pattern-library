import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import lifecycleLogger from '../utils/lifecycle-logger';
import { clearIsSameNode, isSameNodeOnce } from '../utils/is-same-node-once';
import nanomorph from '../utils/component-morph';
import TemplateNoStringReturnException from '../utils/template-no-string-return-exception';

var withRender = function withRender(Base) {
  return (
    /**
     * Adds the ability to render external DOM-based templates,
     * applies changes incrementally by DOM-morphing and provides additional lifecycle hooks.
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
    function (_Base) {
      _inherits(WithRender, _Base);

      function WithRender() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var template = _ref.template,
            options = _objectWithoutProperties(_ref, ['template']);

        _classCallCheck(this, WithRender);

        var _this = _possibleConstructorReturn(this, (WithRender.__proto__ || _Object$getPrototypeOf(WithRender)).call(this, options));

        _this._template = template;
        _this._hasTemplate = !!template;
        _this._hasRendered = false;

        // hook into withUpdate's updated call
        _this.updated = _this.render;
        return _this;
      }

      /**
       * render - method can be overwritten and is called right after the component is connected.
       */


      _createClass(WithRender, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

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
                  _this2.childrenFragment.appendChild(refClone);
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
                  throw new TemplateNoStringReturnException(this);
                }
                renderFragment.appendChild(items);
              }

              if (initial) {
                _get(WithRender.prototype.__proto__ || _Object$getPrototypeOf(WithRender.prototype), 'appendChild', this).call(this, renderFragment);
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
              console.error(err);
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

      }]);

      return WithRender;
    }(Base)
  );
};

export default withRender;