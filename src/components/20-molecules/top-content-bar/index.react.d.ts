import React from 'react';

type Variant = 'warning';

export interface AXATopContentBarProps {
  variant?: Variant;
  ctatext: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

declare function createAXATopContentBar(
  createElement: typeof React.createElement
): React.ComponentType<AXATopContentBarProps>;

export default createAXATopContentBar;
