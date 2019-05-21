import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATopContentBarProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATopContentBar(
  createElement: typeof React.createElement
): React.ComponentType<AXATopContentBarProps>;

export = createAXATopContentBar;