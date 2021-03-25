import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXASpinnerProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXASpinner(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXASpinnerProps>;

export default createAXASpinner;