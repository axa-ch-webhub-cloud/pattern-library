import React from 'react';

export interface AXAFooterProps {
  clickevents?: Boolean;
  className?: string;
  children?: React.ReactNode;
  onItemClick?: (currentTarget: HTMLElement) => void;
}

declare function createAXAFooter(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFooterProps>;

export default createAXAFooter;
