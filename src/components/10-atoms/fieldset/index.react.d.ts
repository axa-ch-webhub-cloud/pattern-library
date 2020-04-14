import React from 'react';

export interface AXAFieldsetProps {
  horizontal?: string;
  error?: string;
  slot?: string;
  enableresponsivestretch?: boolean;
}

declare function createAXAFieldset(
  createElement: typeof React.createElement
): React.ComponentType<AXAFieldsetProps>;

export default createAXAFieldset;
