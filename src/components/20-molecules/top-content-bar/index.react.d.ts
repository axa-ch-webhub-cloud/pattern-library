import React from 'react';

type Variant = 'warning';

interface AXATopContentBarProps {
  variant?: Variant;
  ctatext: String;
  href?: String;
  onClick?: () => void;
}

declare function createAXATopContentBar(
  createElement: typeof React.createElement
): React.ComponentType<AXATopContentBarProps>;

export = createAXATopContentBar;
