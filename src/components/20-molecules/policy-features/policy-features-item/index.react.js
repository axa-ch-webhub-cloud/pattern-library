import withReact from '../../../../utils/with-react';
import AXAPolicyFeaturesItem from './index';

export default createElement => ({
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
      className
    },
    children
  );
