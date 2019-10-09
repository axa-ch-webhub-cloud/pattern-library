import React from 'react';

export interface AXAFooterSmallProps {
  onLanguageClick?: (language: string) => void;
  onDisclaimerClick?: (language: string) => void;
  className?: string;
  // set to true if want to use onLanguageClick/onDisclaimerClick callbacks
  dynamic?: boolean;
}

declare function createAXAFooterSmall(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterSmallProps>;

export default createAXAFooterSmall;
