import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATooltipProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATooltip(
  createElement: typeof React.createElement
): React.ComponentType<AXATooltipProps>;

export = createAXATooltip;