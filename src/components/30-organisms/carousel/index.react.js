import withReact from '../../../utils/with-react';
import AXACarousel from './index';

export default createElement => ({
  autorotatedisabled,
  autorotatetime,
  keysenabled,
  className,
  children,
}) =>
  withReact(createElement)(
    AXACarousel.tagName,
    {
      autorotatedisabled,
      autorotatetime,
      keysenabled,
      className,
    },
    children
  );
