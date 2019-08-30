import React from 'react';

export interface AXAFooterProps {
  onItemClick?: Function;
  clickevents?: Boolean;
  className?: string;
}

declare function createAXAFooter(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterProps>;

export default createAXAFooter;
