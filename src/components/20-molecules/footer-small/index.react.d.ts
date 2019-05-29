import React from 'react';

interface Item {
  text: string;
  link?: string;
}

interface AXAFooterSmallProps {
  languageItems: Item[];
  disclaimerItems: Item[];
  copyrightText: string;
  activeLanguage?: string;
  /**
   * set to true if want to use onLanguageChange cb
   */
  dynamic?: boolean;
  onLanguageChange: (language: string) => void;
}

declare function createAXAFooterSmall(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterSmallProps>;

export = createAXAFooterSmall;
