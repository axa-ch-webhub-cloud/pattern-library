import React from 'react';

interface AXAFieldsetProps {
  horizontal?: boolean;
}

declare function createAXAFieldset(
  createElement: typeof React.createElement
): React.ComponentType<AXAFieldsetProps>;

export = createAXAFieldset;
