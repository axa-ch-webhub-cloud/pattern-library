import dasherize from './dasherize';
import on from './on';

/**
 * Provides a partially applied function which let's you wrap any WebComponent with React.
 * - it supports first-class props for web components
 * - it handles custom events
 *
 * @link https://github.com/webcomponents/react-integration - inspired by react-integration
 * @param React
 * @param {Boolean} [options.pure=true] - Is this a pure component?
 * @returns {function(*)}
 *
 * @example <caption>How to use</caption>
 * import React from 'react';
 * import withReact from '@axa-ch/patterns-library/src/js/with-react';
 * import AXAButton from '@axa-ch/patterns-library/dist/components/m-button'
 *
 * const AXAButtonReact = withReact(React)(AXAButton);
 *
 * const MyApp = ({ color, onClick }) => (
 *  <AXAButtonReact color={color} onClick={onClick}>Hello World</AXAButtonReact>
 * );
 */
const withReact = (React, { pure = true } = {}) => (WebComponent) => {
  const { name } = WebComponent;
  const displayName = `${name}React`;
  const WCTagName = dasherize(WebComponent.name);
  const eventCache = {};
  const Component = pure ? React.PureComponent : React.Component;

  return class WebComponentWrapper extends Component {
    static get displayName() {
      return displayName;
    }

    constructor(props) {
      super(props);

      this.handleRef = this.handleRef.bind(this);
    }

    componentDidMount() {
      this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps(props) {
      const { wcNode } = this;

      Object.keys(props).forEach((key) => {
        if (key === 'children' || key === 'style') {
          return;
        }

        const keyFrom2 = key.charAt(2);

        // bind event handlers
        if (key.indexOf('on') === 0 && keyFrom2 === keyFrom2.toUpperCase()) {
          if (eventCache[key]) {
            eventCache[key]();
          }

          eventCache[key] = on(wcNode, key.substring(2).toLowerCase(), props[key]);
        } else {
          // set properties by DOM property API's - not HTML setAttribute -> first class props
          wcNode[key] = props[key];
        }
      });
    }

    componentWillUnmount() {
      // clean up bound custom events
      Object.keys(eventCache).forEach((key) => {
        if (eventCache[key]) {
          eventCache[key]();
        }
      });
    }

    handleRef(wcNode) {
      this.wcNode = wcNode;
    }

    render() {
      const { props } = this;
      const { children } = props;

      return (
        <WCTagName ref={this.handleRef}>{children}</WCTagName>
      );
    }
  };
};

export default withReact;
