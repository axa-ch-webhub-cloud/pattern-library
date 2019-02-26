import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

const reWhiteSpace = /\s+/;
const reSize = /\d+|auto|(?:xs|sm|md|lg|xl|xxl)(?:-(?:\d+|auto|))?/;
const reOrder = /\d+|first|last|(?:xs|sm|md|lg|xl|xxl)-(?:\d+|first|last)/;
const reOffset = /\d+|(?:xs|sm|md|lg|xl|xxl)(?:-\d+)?/;
const validModifiers = reModifiers => (modifier) => {
  const type = typeof modifier;

  return type === 'number' || (type === 'string' && reModifiers.test(modifier));
};
const validSize = validModifiers(reSize);
const validOrder = validModifiers(reOrder);
const validOffset = validModifiers(reOffset);
const toArray = (modifier) => {
  if (Array.isArray(modifier)) {
    return modifier;
  }

  if (typeof modifier === 'string') {
    return modifier.split(reWhiteSpace);
  }

  return [modifier];
};
// eslint-disable-next-line consistent-return
const modifierProp = (filter, format) => (props, propName, componentName) => {
  const prop = props[propName];
  const modifiers = toArray(prop);

  if (prop && modifiers.length !== modifiers.filter(validModifiers).length) {
    return new Error(`Invalid modifiers \`${propName}\` supplied to \`${componentName}\`, expected ${format} - multiple modifiers separated by spaces.`);
  }
};

class AXACol extends BaseComponentGlobal {
  static tagName = 'axa-col'
  static propTypes = {
    classes: PropTypes.string,
    size: modifierProp(validSize, '`number|auto|xs|sm|md|lg|xl|xxl` optionally followed by `-(number|auto)`'),
    order: modifierProp(validOrder, '`number|first|last|xs|sm|md|lg|xl|xxl` optionally followed by `-(number|first|last)`'),
    offset: modifierProp(validOffset, '`number|xs|sm|md|lg|xl|xxl` optionally followed by `-number`'),
  }

  init() {
    super.init({ styles });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  // You may want to update stuff before rendering.
  willRenderCallback() {
    const { props: { classes }, props } = this;
    let { size = '', order = '', offset = '' } = props;

    size = toArray(size);
    order = toArray(order);
    offset = toArray(offset);

    /* eslint-disable no-shadow */
    size = size.filter(validSize).map(size => `u-col-${size}`);
    order = order.filter(validOrder).map(order => `u-order-${order}`);
    offset = offset.filter(validOffset).map(offset => `u-offset-${offset}`);
    /* eslint-enable no-shadow */

    this.className = classnames('m-col', { 'u-col': !size || !size.length }, classes, size, order, offset);
  }
}

defineOnce(AXACol.tagName, AXACol);

export default AXACol;
