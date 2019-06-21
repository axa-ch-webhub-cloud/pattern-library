import React from 'react';

type Variant = 'fixed';

interface AXACookieDisclaimerProps {
  variant?: Variant;
  title?: String;
  buttonname?: String;
  onClick?: () => void;
}

declare function createAXACookieDisclaimer(
  createElement: typeof React.createElement
): React.ComponentType<AXACookieDisclaimerProps>;

export = createAXACookieDisclaimer;
