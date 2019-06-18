import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAHeaderProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAHeader(
  createElement: typeof React.createElement
): React.ComponentType<AXAHeaderProps>;

export = createAXAHeader;