import React from 'react';

export interface AXAStepperProps {
  steps: Array<string>;
  stepActive: number;
  stepProgress: number;
  className?: string;
}

declare function createAXAStepperReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAStepperProps>;
