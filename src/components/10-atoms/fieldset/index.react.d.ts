import React from 'react';

export interface AXAFieldsetProps {
  horizontal?: 'horizontal' | 'stretch';
  error?: string;
  slot?: string;
}

declare function createAXAFieldset(createElement: typeof React.createElement, version?: string): React.ComponentType<AXAFieldsetProps>;

export default createAXAFieldset;
