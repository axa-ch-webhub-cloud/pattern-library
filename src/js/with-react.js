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
  const { tagName } = WebComponent;
  const displayName = `${camelize(tagName)}React`;
  const Component = pure ? React.PureComponent : React.Component;

  return class WebComponentWrapper extends Component {
    static get displayName() {
      return displayName;
    }

    constructor(props) {
      super(props);

      this._eventCache = {};
    }

    componentDidMount() {
      this.updateWebComponentProps(this.props);
    }

    componentDidUpdate() {
      this.updateWebComponentProps(this.props);
    }

    // eslint-disable-next-line react/sort-comp
    updateWebComponentProps(props) {
      const { wcNode, _eventCache: eventCache } = this;
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
      const { props: { children }, handleRef } = this;

      return createElement(tagName, { ref: handleRef }, children);
    }
  };
};

export default withReact;
