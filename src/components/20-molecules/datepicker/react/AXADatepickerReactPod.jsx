import { createElement } from 'react';
import createAXADatepickerReact from '../index.react.js';

const podNameAsVersionSuffix = 'rsv';

const AXADatepickerReact = createAXADatepickerReact(
  createElement,
  podNameAsVersionSuffix
);
export default AXADatepickerReact;
