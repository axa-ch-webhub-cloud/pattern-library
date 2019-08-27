import React from 'react';

type Variant = 'size-2' | 'size-3' | 'size-4' | 'size-5' | 'size-6';

interface AXATitleSecondaryProps {
  variant?: Variant;
  className?: string;
  slot?: string;
}

declare function createAXATitleSecondary(
  createElement: typeof React.createElement
): React.ComponentType<AXATitleSecondaryProps>;

export = createAXATitleSecondary;
