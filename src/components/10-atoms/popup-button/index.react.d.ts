import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAPopupButtonProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAPopupButton(
  createElement: typeof React.createElement
): React.ComponentType<AXAPopupButtonProps>;

export = createAXAPopupButton;