import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATitleSecondaryProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATitleSecondary(
  createElement: typeof React.createElement
): React.ComponentType<AXATitleSecondaryProps>;

export = createAXATitleSecondary;
