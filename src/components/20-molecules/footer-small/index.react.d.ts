import React from 'react';

interface Item {
  text: string;
  link?: string;
}

interface AXAFooterSmallProps {
  languageItems: Item[];
  disclaimerItems: Item[];
  copyrightText: String;
  activeLanguage?: String;
  dynamic?: boolean;
}

declare function createAXAFooterSmall(createElement: typeof React.createElement): React.ComponentType<AXAFooterSmallProps>;

export = createAXAFooterSmall;
