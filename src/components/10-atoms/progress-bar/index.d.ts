import React from 'react';

export interface AXAProgressBarProps {
  className?: string;
  small?: boolean;
  noBorderRadius?: boolean;
  value?: number;
  max?: number;
  text?: string;
}

declare function createAXAProgressBarReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAProgressBarProps>;
