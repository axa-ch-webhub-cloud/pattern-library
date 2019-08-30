import React from 'react';

export interface Item {
  text: string;
  link?: string;
}

export interface AXAFooterSmallProps {
  languageItems: Item[];
  disclaimerItems: Item[];
  copyrightText: string;
  activeLanguage?: string;
  /**
   * set to true if want to use onLanguageChange cb
   */
  dynamic?: boolean;
  onLanguageChange: (language: string) => void;
  className?: string
}

declare function createAXAFooterSmall(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterSmallProps>;

export default createAXAFooterSmall;
