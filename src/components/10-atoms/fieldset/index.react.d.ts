import React from 'react';

interface AXAFieldsetProps {
  horizontal?: boolean;
  slot?: string;
}

declare function createAXAFieldset(
  createElement: typeof React.createElement
): React.ComponentType<AXAFieldsetProps>;

export = createAXAFieldset;
