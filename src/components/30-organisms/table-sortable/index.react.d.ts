import React from 'react';

type Model = {
  thead?: Array<any>;
  tbody?: Array<any>;
  tfoot?: Array<any>;
};

interface AXATableSortableProps {
  model?: Model;
  innerscroll?: number;
  maxheight?: number;
  dateSortColumnIndex?: string;
  showallinline?: boolean;
  onClick?: (e?: any) => void;
}

declare function createAXATableSortable(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATableSortableProps>;

export = createAXATableSortable;
