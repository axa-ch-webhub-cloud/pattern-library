import React from 'react';

export interface AXAStepperProps {
  steps: Array<string>;
  stepActive: number;
  stepProgress: number;
  className?: string;
}

declare function createAXAStepper(
  createElement: typeof React.createElement,
  version: string
): React.ComponentType<AXAStepperProps>;

export default createAXAStepper;
