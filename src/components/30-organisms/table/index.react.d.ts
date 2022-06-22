import React from 'react';

export interface AXATableProps {
  className?: string;
  innerscroll?: number;
  maxheight?: number;
  children?: React.ReactNode;
}

declare function createAXATable(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATableProps>;

export default createAXATable;
