import React from 'react';

export type Variant = 'warning';

export interface AXATopContentBarProps {
  variant?: Variant;
  icon?: string;
  stickymobile?: boolean;
  overlaydesktop?: boolean;
  closable?: boolean;
  initiallyclosed?: boolean;
  ctatext?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

declare function createAXATopContentBar(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATopContentBarProps>;

export default createAXATopContentBar;
