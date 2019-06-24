import React from 'react';

type Variant = 'foo' | 'bar';

interface AXACommercialHeroCoverProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXACommercialHeroCover(
  createElement: typeof React.createElement
): React.ComponentType<AXACommercialHeroCoverProps>;

export = createAXACommercialHeroCover;