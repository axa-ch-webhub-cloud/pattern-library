import React from 'react';

export type AXATextSizes = 1 | 2 | 3 | 4;

export interface AXATextProps {
  size?: AXATextSizes;
  nowrap?: boolean;
  bold?: boolean;
  italic?: boolean;
  children?: React.ReactNode;
}

declare function createAXATextReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATextProps>;
