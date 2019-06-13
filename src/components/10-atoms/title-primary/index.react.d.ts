import React from 'react';

type Variant = 'size-2' | 'size-3' | 'size-4' | 'size-5' | 'size-6';

interface AXATitlePrimaryProps {
  variant?: Variant;
}

declare function createAXATitlePrimary(
  createElement: typeof React.createElement
): React.ComponentType<AXATitlePrimaryProps>;

export = createAXATitlePrimary;
