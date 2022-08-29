import React from 'react';

export type Model = {
  thead?: Array<any>;
  tbody?: Array<any>;
  tfoot?: Array<any>;
};

export interface AXATableSortableProps {
  model?: Model;
  innerscroll?: number;
  maxheight?: number;
  dateSortColumnIndex?: string;
  showallinline?: boolean;
  children?: React.ReactNode;
  onClick?: (e?: any) => void;
}

declare function createAXATableSortable(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATableSortableProps>;

export default createAXATableSortable;
