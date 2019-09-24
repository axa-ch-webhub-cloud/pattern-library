import React from 'react';

export interface Item {
  text: string;
  key: string;
  link?: string;
}

export interface AXAFooterSmallProps {
  languageItems: Item[];
  disclaimerItems: Item[];
  copyrightText: string;
  activeLanguage?: string;
  onLanguageChange: (language: string) => void;
  className?: string;

  // set to true if want to use onLanguageChange/onDisclaimerChange callbacks
  dynamic?: boolean;
}

declare function createAXAFooterSmall(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterSmallProps>;

export default createAXAFooterSmall;
