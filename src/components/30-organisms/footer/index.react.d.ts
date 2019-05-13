import React from 'react';

interface AXAFooterProps {
  /* Your type declarations for props go here, e.g.:
  languageItems: Item[];
  copyrightText: String;
  dynamic?: boolean;
  */
}

declare function createAXAFooter(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterProps>;

export = createAXAFooter;
