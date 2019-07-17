import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAPopupContentProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAPopupContent(
  createElement: typeof React.createElement
): React.ComponentType<AXAPopupContentProps>;

export = createAXAPopupContent;