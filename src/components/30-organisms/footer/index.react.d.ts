import React from 'react';

interface AXAFooterProps {
  onItemClick?: Function;
  dynamic?: Boolean;
}

declare function createAXAFooter(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterProps>;

export = createAXAFooter;
