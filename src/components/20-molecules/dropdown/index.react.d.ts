import React from 'react';

export type Item = {
  name: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
};

export type AXADropdownChangeEvent = {
  target: {
    value: string;
    index: number;
    name: string;
  };
};

export interface AXADropdownProps {
  items: Array<Item>;
  embedded?: boolean;
  refId?: string;
  label?: string;
  required?: boolean;
  invalid?: boolean;
  error?: string;
  native?: boolean;
  onChange?: (e: AXADropdownChangeEvent) => void;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  defaultTitle?: string;
  value?: string;
  checkMark?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  className?: string;
  maxHeight?: string;
  cropText?: boolean;
  showValue?: boolean;
}

declare function createAXADropdown(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXADropdownProps>;

export default createAXADropdown;
