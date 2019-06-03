import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATitlePrimaryProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATitlePrimary(
  createElement: typeof React.createElement
): React.ComponentType<AXATitlePrimaryProps>;

export = createAXATitlePrimary;
