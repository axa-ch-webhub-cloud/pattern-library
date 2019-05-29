import React from 'react';

interface AXADropdownProps {
  items: Array<{
    name: string;
    // boolean: so that false can be used instead of '' as a workaround for #1044
    value?: boolean | number | string;
    url?: string;
    isSelected?: boolean;
    isInitialItem?: boolean;
  }>;
  onAXAValueChange?: (value: string | number) => void;
  title?: string;
}

declare function createAXADropdown(
  createElement: typeof React.createElement
): React.ComponentType<AXADropdownProps>;

export = createAXADropdown;
