import withReact from '../../../utils/with-react';
import AXAFooterSmall from './index';

export default createElement => ({
  className = '',
  onLanguageChange = {},
  onDisclaimerChange = {},
  activeLanguage = '',
  dynamic = false,
  children,
}) =>
  withReact(createElement)(
    AXAFooterSmall.tagName,
    {
      className,
      dynamic,
      activeLanguage,
      onLanguageChange,
      onDisclaimerChange,
    },
    children
  );
