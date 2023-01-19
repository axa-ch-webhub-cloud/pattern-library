import React from 'react';

export interface AXAContainerProps {
  children?: React.ReactNode;
}

declare function createAXAContainerReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAContainerProps>;
