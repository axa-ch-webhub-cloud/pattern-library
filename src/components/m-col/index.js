import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

const reWhiteSpace = /\s+/;
const reModifiers = /\d+|(?:xs|sm|md|lg|xl)(?:-(?:\d+|auto|first|last))?/;
const validModifiers = (modifier) => {
  const type = typeof modifier;

  return type === 'number' || (type === 'string' && reModifiers.test(modifier));
};
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
const modifierProp = (props, propName, componentName) => {
  const prop = props[propName];
  const modifiers = toArray(prop);

  if (modifiers.length !== modifiers.filter(validModifiers).length) {
    return new Error(`Invalid modifiers \`${propName}\` supplied to \`${componentName}\`, expected \`number|xs|sm|md|lg|xl\` optionally followed by \`-(number|auto|first|last)\` - multiple modifiers separated by spaces.`);
  }
};

class AXACol extends BaseComponentGlobal {
  static tagName = 'axa-col'
  static propTypes = {
    classes: PropTypes.string,
    size: modifierProp,
    order: modifierProp,
    offset: modifierProp,
  }

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() {
    return ['classes', 'size', 'order', 'offset'];
  }

  constructor() {
    super({ styles });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  // You may want to update stuff before rendering.
  willRenderCallback() {
    const { classes } = this;
    let { size = '', order = '', offset = '' } = this;

    size = toArray(size);
    order = toArray(order);
    offset = toArray(offset);

    /* eslint-disable no-shadow */
    size = size.filter(validModifiers).map(size => `u-col-${size}`);
    order = order.filter(validModifiers).map(order => `u-order-${order}`);
    offset = offset.filter(validModifiers).map(offset => `u-offset-${offset}`);
    /* eslint-enable no-shadow */

    this.className = classnames('m-col', { 'u-col': !size || !size.length }, classes, size, order, offset);
  }
}

defineOnce(AXACol.tagName, AXACol);

export default AXACol;
