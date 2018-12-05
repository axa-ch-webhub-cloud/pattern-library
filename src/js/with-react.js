/* globals customElements */

import React, { createElement } from 'react';
import dasherize from './dasherize';
import camelize from './camelize';
import partition from './array-partition';
import on from './on';

const PROP_BLACKLIST = [
  'children', // children are never passed as props, instead as real DOM children
  'style', // @todo: discuss if we need style, cause we normally use BEM
];
const blackListFilter = key => PROP_BLACKLIST.indexOf(key) === -1;
const isEventFilter = (key) => {
  if (!key) {
    return false;
  }

  const keyFrom2 = key.charAt(2);

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
const withReact = (WebComponent, { pure = true, passive = false } = {}) => {
  // IMPORTANT:
  // the Custom Element can only be instantiated as soon as it is registered in CustomElementRegistry
  // which in turn is deferred after DOMReady
  // hence it's tagName could only be resolved lazily
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry
  // therefor we don't instantiate it, but rather use a statically defined tagName property
  const { tagName, builtInTagName } = WebComponent;
  const componentName = builtInTagName || tagName;
  const displayName = `${camelize(componentName)}React`;
  const Component = pure ? React.PureComponent : React.Component;

  return class WebComponentWrapper extends Component {
    // eslint-disable-next-line react/sort-comp
    static get displayName() {
      return displayName;
    }

    constructor(props) {
      super(props);

      this._eventCache = {};

      // make sure that the custom element is ready
      // ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get
      const isDefined = !!customElements.get(tagName);

      this.state = {
        isDefined,
      };
    }

    componentDidMount() {
      const { state: { isDefined } } = this;

      if (isDefined) {
        this.updateWebComponentProps();
      } else {
        // make sure that the custom element is ready
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined
        customElements.whenDefined(tagName).then(() => {
          this.setState({ isDefined: true });
        });
      }
    }

    componentDidUpdate() {
      this.updateWebComponentProps();
    }

    // eslint-disable-next-line react/sort-comp
    updateWebComponentProps() {
      const { wcNode, _eventCache: eventCache, props, state: { isDefined } } = this;

      // only patch if custom element is defined and avoid type error of
      // TypeError: wcNode.setProps is not a function
      if (!isDefined) {
        return;
      }

      const propsKeys = Object.keys(props);
      const [eventKeys, dataKeys] = propsKeys.reduce(partition(isEventFilter), [[], []]);

      eventKeys.forEach((key) => {
        if (eventCache[key]) {
          eventCache[key]();
        }

        const eventName = dasherize(key.substring(2));

        eventCache[key] = on(wcNode, eventName, props[key], { passive });
      });

      const dataProps = dataKeys.filter(blackListFilter)
        .reduce((data, key) => ({
          ...data,
          [key]: props[key],
        }), {});

      if (dataProps.className !== undefined) {
        wcNode.initialClassName = dataProps.className;
        wcNode.classList.add(dataProps.className);
      }
      wcNode.setProps(dataProps);
    }

    componentWillUnmount() {
      const { _eventCache: eventCache } = this;

      // clean up bound custom events
      Object.keys(eventCache).forEach((key) => {
        if (eventCache[key]) {
          eventCache[key]();
        }
      });

      delete this.wcNode;
    }

    handleRef = (wcNode) => {
      this.wcNode = wcNode;
    }

    render() {
      // eslint-disable-next-line react/prop-types
      const { props: { children, ...props }, handleRef } = this;
      const { observedAttributes } = WebComponent;

      // important: set non-observed attributes to keep native built-in features working
      if (Array.isArray(observedAttributes)) {
        observedAttributes.forEach((name) => {
          delete props[camelize(name)];
        });
      }

      const propsKeys = Object.keys(props);

      // remove events from props
      propsKeys.filter(isEventFilter).forEach((key) => {
        delete props[key];
      });

      props.ref = handleRef;

      if (builtInTagName) {
        props.is = tagName;
      }

      return createElement(componentName, props, children);
    }
  };
};

export default withReact;
