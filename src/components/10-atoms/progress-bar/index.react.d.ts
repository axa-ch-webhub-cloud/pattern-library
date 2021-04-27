import React from 'react';

export interface AXAProgressBarProps {
  className?: string;
  small?: boolean;
  fullWidth?: boolean;
  value?: string;
  text?: string;
}

declare function createAXAProgressBar(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAProgressBarProps>;

export default createAXAProgressBar;
