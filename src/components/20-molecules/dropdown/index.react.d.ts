import React from 'react';

type AXADropdownChangeEvent<T> = {
  target: {
    key: string;
    name: string;
    value: T;
    isSelected: boolean;
  }
}

interface AXADropdownProps<T = number|string> {
  embedded?: boolean;
  error?: string;
  items: Array<{
    name: string;
    value?: T;
    selected?: boolean;
    disabled?: boolean;
  }>;
  native?: boolean,
  onBlur?: (e?: any) => void;
  onChange?: (e: AXADropdownChangeEvent<T>) => void;
  onFocus?: (e?: any) => void;
  title?: string;
  value?: T;
  valid?: boolean;
}

declare function createAXADropdown(
  createElement: typeof React.createElement
): React.ComponentType<AXADropdownProps>;

export = createAXADropdown;
