import withReact from '../../../utils/with-react.js';
import AXAPolicyFeatures from './index.wc.js';
import AXAPolicyFeaturesItem from './policy-features-item/index.wc.js';

export default (createElement, version) =>
  withReact(createElement, AXAPolicyFeatures, version);

export const createAXAPolicyFeaturesItemReact = (createElement, version) =>
  withReact(createElement, AXAPolicyFeaturesItem, version);
