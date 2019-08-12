import withReact from '../../../utils/with-react';
import AXACommercialHeroBanner from './index';

export default createElement => ({
  className,
  variant,
  imagePosition,
  src,
  children,
}) =>
  withReact(createElement)(
    AXACommercialHeroBanner.tagName,
    {
      className,
      variant,
      imagePosition,
      src,
    },
    children
  );
