import withReact from '../../../utils/with-react';
import AXAPolicyFeatures from './index';
import AXAPolicyFeaturesItem from './policy-features-item';

export default createElement => ({
  title,
  variant,
  children,
  className = '',
}) =>
  withReact(createElement)(
    AXAPolicyFeatures.tagName,
    {
      title,
      variant,
      className,
    },
    children
  );

export const policyFeaturesItem = createElement => ({
  icon,
  title,
  description,
  children,
  className = '',
}) =>
  withReact(createElement)(
    AXAPolicyFeaturesItem.tagName,
    {
      icon,
      title,
      description,
      className,
    },
    children
  );
