import React from 'react';

export interface AXAFooterProps {
  onItemClick?: Function;
  clickevents?: Boolean;
  className?: string;
  children?: React.ReactNode;
}

declare function createAXAFooter(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFooterProps>;

export default createAXAFooter;
