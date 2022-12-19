import React from 'react';

export interface AXAFieldsetProps {
  horizontal?: 'horizontal' | 'stretch';
  error?: string;
  slot?: string;
  children?: React.ReactNode;
}

declare function createAXAFieldsetReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFieldsetProps>;

export default createAXAFieldsetReact;
