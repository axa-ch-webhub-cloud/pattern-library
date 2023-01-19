import React from 'react';

export interface AXAFooterSmallProps {
  onLanguageClick?: (languageIndex: number) => void;
  onDisclaimerClick?: (disclaimerIndex: number) => void;
  className?: string;
  // set to true if want to use onLanguageClick/onDisclaimerClick callbacks
  dynamic?: boolean;
  children?: React.ReactNode;
}

declare function createAXAFooterSmallReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFooterSmallProps>;
