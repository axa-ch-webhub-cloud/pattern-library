import React from 'react';

type Variant = 'fixed';

interface AXACookieDisclaimerProps {
  variant?: Variant;
  title?: string;
  buttonname?: string;
  className?: string;
  onClick?: () => void;
}

declare function createAXACookieDisclaimer(
  createElement: typeof React.createElement
): React.ComponentType<AXACookieDisclaimerProps>;

export = createAXACookieDisclaimer;
