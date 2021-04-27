import React from 'react';

export interface AXAModalProps {
  className?: string;
  open?: boolean;
  forced?: boolean;
}

declare function createAXAModal(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAModalProps>;

export default createAXAModal;
