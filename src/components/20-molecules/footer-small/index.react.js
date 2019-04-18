import withReact from '../../../utils/with-react';
import AXAFooterSmall from './index';

export default createElement => ({
  languageItems = [],
  disclaimerItems = [],
  copyrightText = '',
  activeLanguage = '',
  onLanguageChange = {},
  onDisclaimerChange = {},
}) =>
  withReact(createElement)(AXAFooterSmall.tagName, {
    languageItems,
    disclaimerItems,
    copyrightText,
    activeLanguage,
    onLanguageChange,
    onDisclaimerChange,
  });
