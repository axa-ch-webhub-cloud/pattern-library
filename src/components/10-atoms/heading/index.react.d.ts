import React from 'react';

export type AXAHeadingSizes = 1 | 2 | 3 | 4 | 5 | 6;

export interface AXAHeadingProps {
  secondary?: boolean;
  size?: AXAHeadingSizes;
  children?: React.ReactNode;
}

declare function createAXAHeading(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAHeadingProps>;

export default createAXAHeading;
