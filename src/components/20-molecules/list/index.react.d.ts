import React from 'react';

export type Variant = 'ordered' | 'unstyled' | 'icon';

export interface AXAListProps {
  className?: string;
  variant?: Variant;
}

declare function createAXAList(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAListProps>;

export default createAXAList;
