import React from 'react';

export interface AXAProgressBarProps {
  className?: string;
  small?: boolean;
  fullWidth?: boolean;
  value?: number;
  max?: number;
  text?: string;
}

declare function createAXAProgressBar(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAProgressBarProps>;

export default createAXAProgressBar;
