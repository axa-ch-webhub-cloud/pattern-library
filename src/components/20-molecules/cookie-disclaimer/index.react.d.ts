import React from 'react';

export type Variant = 'fixed';

export interface AXACookieDisclaimerProps {
  variant?: Variant;
  title?: string;
  buttonname?: string;
  className?: string;
  onClick?: () => void;
}

declare function createAXACookieDisclaimer(createElement: typeof React.createElement, version?: string): React.ComponentType<AXACookieDisclaimerProps>;

export default createAXACookieDisclaimer;
