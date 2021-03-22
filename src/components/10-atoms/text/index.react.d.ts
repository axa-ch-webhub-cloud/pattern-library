import React from 'react';

export type Variant = 'size-2' | 'size-3' | 'size-4' | 'bold' | 'semibold';

export interface AXATextProps {
  variant?: Variant;
}

declare function createAXAText(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATextProps>;

export default createAXAText;
