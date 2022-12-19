import React from 'react';

export interface AXASpinnerProps {
  className?: string;
  small?: boolean;
  color?: 'inverted-dark-grey' | 'inverted-white';
}

declare function createAXASpinnerReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXASpinnerProps>;
