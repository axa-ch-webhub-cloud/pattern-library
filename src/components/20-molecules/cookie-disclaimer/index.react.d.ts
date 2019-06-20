import React from 'react';

type Variant = 'foo' | 'bar';

interface AXACookieDisclaimerProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXACookieDisclaimer(
  createElement: typeof React.createElement
): React.ComponentType<AXACookieDisclaimerProps>;

export = createAXACookieDisclaimer;