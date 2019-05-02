import React from 'react';

// Not polished/finalised yet. Just an example.
interface AXAFooterSmallProps {
  languageItems: object[],
  disclaimerItems: object[],
  copyrightText: String;
  activeLanguage: String;
  dynamic: boolean
}

declare function createAXAFooterSmall(createElement: typeof React.createElement): React.ComponentType<AXAFooterSmallProps>;

export = createAXAFooterSmall;

