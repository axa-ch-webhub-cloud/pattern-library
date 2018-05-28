import React, { createElement } from 'react';
import dasherize from './dasherize';
import camelize from './camelize';
import partition from './array-partition';
import on from './on';

var PROP_BLACKLIST = ['children', // children are never passed as props, instead as real DOM children
'style'];
var blackListFilter = function blackListFilter(key) {
  return PROP_BLACKLIST.indexOf(key) === -1;
};
var isEventFilter = function isEventFilter(key) {
  var keyFrom2 = key.charAt(2);

  return key.indexOf('on') === 0 && keyFrom2 === keyFrom2.toUpperCase();
};

/**
 * Provides a function which let's you wrap any WebComponent with React.
 * - it supports first-class props for web components
 * - it handles custom events
 *
 * @link https://github.com/webcomponents/react-integration - inspired by react-integration
 * @param WebComponent
 * @param pure
 * @param passive
 * @returns {{displayName: *, new(*=): WebComponentWrapper, prototype: WebComponentWrapper}}
 *
 * @example <caption>How to use</caption>
 * import React from 'react';
 * import withReact from '@axa-ch/patterns-library/src/js/with-react';
 * import AXAButton from '@axa-ch/patterns-library/dist/components/m-button'
 *
 * const AXAButtonReact = withReact(AXAButton, {
 *   pure: true,
 * });
 *
 * const MyApp = ({ color, onClick }) => (
 *  <AXAButtonReact color={color} onClick={onClick}>Hello World</AXAButtonReact>
 * );
 */
var withReact = function withReact(WebComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$pure = _ref.pure,
      pure = _ref$pure === undefined ? true : _ref$pure,
      _ref$passive = _ref.passive,
      passive = _ref$passive === undefined ? false : _ref$passive;

  var displayName = '';
  var WCTagName = void 0;
  var Component = pure ? React.PureComponent : React.Component;

  return function (_Component) {
    babelHelpers.inherits(WebComponentWrapper, _Component);
    babelHelpers.createClass(WebComponentWrapper, null, [{
      key: 'displayName',
      get: function get() {
        return displayName;
      }
    }]);

    function WebComponentWrapper(props) {
      babelHelpers.classCallCheck(this, WebComponentWrapper);

      var _this = babelHelpers.possibleConstructorReturn(this, (WebComponentWrapper.__proto__ || Object.getPrototypeOf(WebComponentWrapper)).call(this, props));

      _this.handleRef = function (wcNode) {
        _this.wcNode = wcNode;
      };

      _this._eventCache = {};
      return _this;
    }

    babelHelpers.createClass(WebComponentWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateWebComponentProps(this.props);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.updateWebComponentProps(this.props);
      }

      // eslint-disable-next-line react/sort-comp

    }, {
      key: 'updateWebComponentProps',
      value: function updateWebComponentProps(props) {
        var wcNode = this.wcNode,
            eventCache = this._eventCache;

        var propsKeys = Object.keys(props);

        var _propsKeys$reduce = propsKeys.reduce(partition(isEventFilter), [[], []]),
            _propsKeys$reduce2 = babelHelpers.slicedToArray(_propsKeys$reduce, 2),
            eventKeys = _propsKeys$reduce2[0],
            dataKeys = _propsKeys$reduce2[1];

        eventKeys.forEach(function (key) {
          if (eventCache[key]) {
            eventCache[key]();
          }

          var eventName = dasherize(key.substring(2));

          eventCache[key] = on(wcNode, eventName, props[key], { passive: passive });
        });

        var dataProps = dataKeys.filter(blackListFilter).reduce(function (data, key) {
          return babelHelpers.extends({}, data, babelHelpers.defineProperty({}, key, props[key]));
        }, {});

        wcNode.batchProps(dataProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var eventCache = this._eventCache;

        // clean up bound custom events

        Object.keys(eventCache).forEach(function (key) {
          if (eventCache[key]) {
            eventCache[key]();
          }
        });

        delete this.wcNode;
      }
    }, {
      key: 'render',
      value: function render() {
        // eslint-disable-next-line react/prop-types
        var children = this.props.children,
            handleRef = this.handleRef;

        // IMPORTANT:
        // the Custom Element can only be instantiated as soon as it is registered in CustomElementRegistry
        // which in turn is deferred after DOMReady
        // hence it's tagName can only be resolved lazily
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry

        if (!WCTagName) {
          var node = new WebComponent();
          var tagName = node.tagName.toLowerCase();

          displayName = camelize(tagName) + 'React';
          WCTagName = tagName;
        }

        return createElement(WCTagName, { ref: handleRef }, children);
      }
    }]);
    return WebComponentWrapper;
  }(Component);
};

export default withReact;