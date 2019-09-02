import React from 'react';

export interface AXATableProps {
  className?: string;
}

declare function createAXATable(
  createElement: typeof React.createElement
): React.ComponentType<AXATableProps>;

export default createAXATable;
