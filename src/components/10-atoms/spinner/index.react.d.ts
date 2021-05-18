import React from 'react';

export interface AXASpinnerProps {
  className?: string;
  small?: boolean;
  color?: string;
}

declare function createAXASpinner(createElement: typeof React.createElement, version?: string): React.ComponentType<AXASpinnerProps>;

export default createAXASpinner;
