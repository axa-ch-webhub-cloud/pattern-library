import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAModalProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAModal(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAModalProps>;

export default createAXAModal;