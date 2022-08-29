import React from 'react';

export interface AXAModalProps {
  className?: string;
  open?: boolean;
  forced?: boolean;
  small?: boolean;
  noheader?: boolean;
  children?: React.ReactNode;
  onClose?: (e: CustomEvent) => void;
}

declare function createAXAModal(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAModalProps>;

export default createAXAModal;
