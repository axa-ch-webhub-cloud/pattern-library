import React from 'react';
import ReactDOM from 'react-dom';
import functionName from './function-name';
import dasherize from './dasherize';
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
 * - it updates children
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
  const name = functionName(WebComponent);
  const displayName = `${name}React`;
  const WCTagName = dasherize(name);
  const Component = pure ? React.PureComponent : React.Component;

  return class WebComponentWrapper extends Component {
    static get displayName() {
      return displayName;
    }

    constructor(props) {
      super(props);

      this._eventCache = {};
      this.slot = document.createElement('div');
    }

    componentDidMount() {
      this.updateWebComponentProps(this.props);
    }

    componentDidUpdate() {
      const { props, slot, wcNode } = this;
      const { children } = props;
      const slotClone = slot.cloneNode(false);

      ReactDOM.render(children, slotClone, () => {
        this.updateWebComponentProps(props);
        wcNode.updateLightDOM(slotClone.childNodes);
      });
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

      wcNode.batchProps(dataProps);
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
      const { props: { children } } = this;

      return (
        <WCTagName ref={this.handleRef}>{children}</WCTagName>
      );
    }
  };
};

export default withReact;
