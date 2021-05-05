import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAListProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAList(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAListProps>;

export default createAXAList;