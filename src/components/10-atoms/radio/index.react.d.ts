import React from 'react';

type Variant = 'foo' | 'bar';

interface AXARadioProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXARadio(
  createElement: typeof React.createElement
): React.ComponentType<AXARadioProps>;

export = createAXARadio;