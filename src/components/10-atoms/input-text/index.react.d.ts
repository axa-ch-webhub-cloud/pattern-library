import React from 'react';

interface AXAInputTextProps {
  /* Your type declarations for props go here, e.g.:
  languageItems: Item[];
  copyrightText: String;
  dynamic?: boolean;
  */ 
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export = createAXAInputText;
