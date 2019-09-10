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

export interface AXADropdownProps<T = number | string> {
  items: Array<Item<T>>;
  embedded?: boolean;
  refId?: string;
  label?: string;
  required?: boolean,
  invalid?: boolean,
  error?: string;
  native?: boolean;
  onChange?: (e: AXADropdownChangeEvent<T>) => void;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  defaultTitle?: string;
  value?: T;
  checkMark?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  className?: string;
}

declare function createAXADropdown(
  createElement: typeof React.createElement
): React.ComponentType<AXADropdownProps>;

export default createAXADropdown;
