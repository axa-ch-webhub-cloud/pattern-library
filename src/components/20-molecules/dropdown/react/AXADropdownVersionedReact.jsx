import { createElement } from 'react';
import createAXADropdownReact from '../index.react.js';

export const numericalVersion =
  window.customElements.get('axa-dropdown').versions['axa-dropdown'];

const AXADropdownReact = createAXADropdownReact(
  createElement,
  numericalVersion
);

export default AXADropdownReact;
