import withReact from '../../../utils/with-react';
import AXACookieDisclaimer from './index';

export default createElement => ({
  onClick,
  title,
  buttonname,
  variant,
  className,
  children,
}) =>
  withReact(createElement)(
    AXACookieDisclaimer.tagName,
    {
      onClick,
      title,
      variant,
      buttonname,
      className,
    },
    children
  );
