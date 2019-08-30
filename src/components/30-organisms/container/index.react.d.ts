import React from 'react';

type Variant = 'foo' | 'bar';

export interface AXAContainerProps {}

declare function createAXAContainer(
  createElement: typeof React.createElement
): React.ComponentType<AXAContainerProps>;

export default createAXAContainer;
