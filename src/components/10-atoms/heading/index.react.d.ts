import React from 'react';

export type Variant = 'foo' | 'bar';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6;

export interface AXAHeadingProps {
  className?: string;
  variant?: Variant;
  rank: Rank;
}

declare function createAXAHeading(
  createElement: typeof React.createElement
): React.ComponentType<AXAHeadingProps>;

export default createAXAHeading;
