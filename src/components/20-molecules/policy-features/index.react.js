import withReact from '../../../utils/with-react';
import AXAPolicyFeatures from './index';
import AXAPolicyFeaturesItem from './policy-features-item';

export default createElement => withReact(createElement, AXAPolicyFeatures);

export const createAXAPolicyFeaturesItemReact = createElement =>
  withReact(createElement, AXAPolicyFeaturesItem);
