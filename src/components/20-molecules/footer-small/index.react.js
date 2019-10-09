import withReact from '../../../utils/with-react';
import AXAFooterSmall from './index';

export default createElement => ({
  className = '',
  onLanguageClick = {},
  onDisclaimerClick = {},
  dynamic = false,
  children,
}) =>
  withReact(createElement)(
    AXAFooterSmall.tagName,
    {
      className,
      dynamic,
      onLanguageClick,
      onDisclaimerClick,
    },
    children
  );
