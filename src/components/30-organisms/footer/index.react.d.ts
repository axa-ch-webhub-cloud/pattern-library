import React from 'react';

interface AXAFooterProps {
  onItemClick?: Function;
  clickevents?: Boolean;
}

declare function createAXAFooter(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterProps>;

export = createAXAFooter;
