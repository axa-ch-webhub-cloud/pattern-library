import React from 'react';

export type Variant = 'default' | 'warning' | 'success' | 'attention';

export interface AXATopContentBarProps {
  variant?: Variant;
  icon?: string;
  stickymobile?: boolean;
  closable?: boolean;
  closed?: boolean;
  ctatext?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

declare function createAXATopContentBar(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATopContentBarProps>;

export default createAXATopContentBar;
