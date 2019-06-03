import React from 'react';

type Variant = 'size-1' | 'size-2' | 'size-3' | 'bold';

interface AXATextProps {
  variant?: Variant;
}

declare function createAXAText(
  createElement: typeof React.createElement
): React.ComponentType<AXATextProps>;

export = createAXAText;
