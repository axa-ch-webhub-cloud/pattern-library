import React from 'react';

type Item<T> = {
  name: string;
  value?: T;
  selected?: boolean;
  disabled?: boolean;
};

type AXADropdownChangeEvent<T> = {
  target: Item<T>;
};

interface AXADropdownProps<T = number | string> {
  items: Array<Item<T>>;
  embedded?: boolean;
  error?: string;
  native?: boolean;
  onChange?: (e: AXADropdownChangeEvent<T>) => void;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  title?: string;
  value?: T;
  valid?: boolean;
  dataTestId?: string;
  className?: string;
}

declare function createAXADropdown(
  createElement: typeof React.createElement
): React.ComponentType<AXADropdownProps>;

export = createAXADropdown;
