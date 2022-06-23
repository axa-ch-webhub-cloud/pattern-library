import React from 'react';

export interface AXAContainerProps {
  children?: React.ReactNode;
}

declare function createAXAContainer(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAContainerProps>;

export default createAXAContainer;
