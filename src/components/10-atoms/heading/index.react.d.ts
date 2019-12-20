import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAHeadingProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAHeading(
  createElement: typeof React.createElement
): React.ComponentType<AXAHeadingProps>;

export default createAXAHeading;
