import React from 'react';

export type Variant = 'primary' | 'secondary';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6;

export interface AXAHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  rank: Rank;
  variant?: Variant;
  children?: React.ReactNode;
}

declare function createAXAHeading(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAHeadingProps>;

export default createAXAHeading;
