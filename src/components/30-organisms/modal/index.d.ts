import React from 'react';

export interface AXAModalProps {
  className?: string;
  open?: boolean;
  forced?: boolean;
  small?: boolean;
  noheader?: boolean;
  children?: React.ReactNode;
  onClose?: (event: CustomEvent<null>) => void;
}

declare function createAXAModalReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAModalProps>;
