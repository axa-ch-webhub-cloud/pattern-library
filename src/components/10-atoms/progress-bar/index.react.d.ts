import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAProgressBarProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAProgressBar(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAProgressBarProps>;

export default createAXAProgressBar;