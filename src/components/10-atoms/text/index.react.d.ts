import React from 'react';

type Variant = 'size-2' | 'size-3' | 'size-4' | 'bold';

export interface AXATextProps {
  variant?: Variant;
}

declare function createAXAText(
  createElement: typeof React.createElement
): React.ComponentType<AXATextProps>;

export default createAXAText;
