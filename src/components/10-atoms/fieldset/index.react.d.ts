import React from 'react';

interface AXAFieldsetProps {
  horizontal?: boolean;
  error?: string;
  slot?: string;
}

declare function createAXAFieldset(
  createElement: typeof React.createElement
): React.ComponentType<AXAFieldsetProps>;

export = createAXAFieldset;
