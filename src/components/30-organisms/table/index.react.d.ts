import React from 'react';

export interface AXATableProps {
  className?: string;
}

declare function createAXATable(createElement: typeof React.createElement, version?: string): React.ComponentType<AXATableProps>;

export default createAXATable;
