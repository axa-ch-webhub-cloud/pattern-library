import withReact from '../../../utils/with-react';
import AXACookieDisclaimer from './index';

export default createElement => ({ onClick, title, buttonname, children }) =>
  withReact(createElement)(
    AXACookieDisclaimer.tagName,
    {
      onClick,
      title,
      buttonname,
    },
    children
  );
