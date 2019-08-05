import React from 'react';

interface AXATableProps {
  className?: string;
}

declare function createAXATable(
  createElement: typeof React.createElement
): React.ComponentType<AXATableProps>;

export = createAXATable;
