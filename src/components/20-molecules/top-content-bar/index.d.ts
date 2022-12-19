import React from 'react';

export type Variant = 'warning';

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

declare function createAXATopContentBarReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATopContentBarProps>;
