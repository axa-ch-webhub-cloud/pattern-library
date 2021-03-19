import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAModalProps {
  className?: string;
  open?: boolean;
}

declare function createAXAModal(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAModalProps>;

export default createAXAModal;
