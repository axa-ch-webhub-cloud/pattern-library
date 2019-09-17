import withReact from '../../../utils/with-react';
import AXATestimonials from './index';

export default createElement => ({
  title,
  subtitle,
  autorotatedisabled,
  autorotatetime,
  showallinline,
  keysenabled,
  className,
  children,
}) =>
  withReact(createElement)(
    AXATestimonials.tagName,
    {
      title,
      subtitle,
      autorotatedisabled,
      autorotatetime,
      showallinline,
      keysenabled,
      className,
    },
    children
  );
