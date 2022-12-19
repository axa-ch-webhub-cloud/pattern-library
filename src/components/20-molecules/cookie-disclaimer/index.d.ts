import React from 'react';

export type Variant = 'fixed';

export interface AXACookieDisclaimerProps {
  variant?: Variant;
  title?: string;
  buttonname?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

declare function createAXACookieDisclaimerReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXACookieDisclaimerProps>;
