import withReact from '../../../utils/with-react';
import AXAPolicyFeatures from './index';

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
      className
    },
    children
  );
