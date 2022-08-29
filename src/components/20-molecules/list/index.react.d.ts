import React from 'react';

export type Variant = 'ordered' | 'unstyled' | 'icon' | 'unordered' | '';

export interface AXAListProps {
  variant?: Variant;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

declare function createAXAList(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAListProps>;

export default createAXAList;
