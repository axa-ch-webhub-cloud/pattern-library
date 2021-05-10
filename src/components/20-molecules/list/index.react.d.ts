import React from 'react';

export type Variant = 'ordered' | 'unstyled' | 'icon';

export interface AXAListProps {
  variant?: string;
  icon?: string;
  className?: string;
}

declare function createAXAList(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAListProps>;

export default createAXAList;
