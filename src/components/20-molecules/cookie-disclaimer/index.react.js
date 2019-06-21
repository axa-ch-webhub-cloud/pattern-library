import withReact from '../../../utils/with-react';
import AXACookieDisclaimer from './index';

export default createElement => ({
  onClick,
  title,
  buttonname,
  variant,
  children,
}) =>
  withReact(createElement)(
    AXACookieDisclaimer.tagName,
    {
      onClick,
      title,
      variant,
      buttonname,
    },
    children
  );
