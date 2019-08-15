import withReact from '../../../utils/with-react';
import AXACommercialHeroBanner from './index';

export default createElement => ({
  className,
  variant,
  imageSource,
  children,
}) =>
  withReact(createElement)(
    AXACommercialHeroBanner.tagName,
    {
      className,
      variant,
      imageSource,
    },
    children
  );
