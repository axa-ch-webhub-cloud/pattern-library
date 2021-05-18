import withReact from '../../../utils/with-react';
import AXAPolicyFeatures from './index';
import AXAPolicyFeaturesItem from './policy-features-item';

export default (createElement, version) => withReact(createElement, AXAPolicyFeatures, version);

export const createAXAPolicyFeaturesItem = (createElement, version) => withReact(createElement, AXAPolicyFeaturesItem, version);
