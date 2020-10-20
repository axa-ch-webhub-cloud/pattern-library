import React from 'react';

export interface AXAStepperProps {
  className?: string;
}

declare function createAXAStepper(
  createElement: typeof React.createElement,
  version: string
): React.ComponentType<AXAStepperProps>;

export default createAXAStepper;
