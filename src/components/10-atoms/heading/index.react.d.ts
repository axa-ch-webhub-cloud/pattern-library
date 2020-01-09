import React from 'react';

export type Variant = 'primary' | 'secondary';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6;

export interface AXAHeadingProps {
  rank: Rank;
  variant?: Variant;
}

declare function createAXAHeading(
  createElement: typeof React.createElement
): React.ComponentType<AXAHeadingProps>;

export default createAXAHeading;
