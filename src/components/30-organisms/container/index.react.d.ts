import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAContainerProps {}

declare function createAXAContainer(
  createElement: typeof React.createElement
): React.ComponentType<AXAContainerProps>;

export = createAXAContainer;
