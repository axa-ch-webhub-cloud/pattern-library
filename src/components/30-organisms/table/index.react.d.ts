import React from 'react';

export interface AXATableProps {
  className?: string;
  innerscroll?: number;
  maxheight?: number;
}

declare function createAXATable(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATableProps>;

export default createAXATable;
