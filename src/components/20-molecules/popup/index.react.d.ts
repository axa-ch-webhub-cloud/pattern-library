import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAPopupProps {
  variant?: Variant;
  slot?: string;
  onClick?: () => void;
}

declare function createAXAPopup(
  createElement: typeof React.createElement
): React.ComponentType<AXAPopupProps>;

export = createAXAPopup;
