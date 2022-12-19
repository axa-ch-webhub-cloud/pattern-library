import React from 'react';

export type Item = {
  name: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
};

export type AXADropdownItem = {
  value: string;
  name: string;
  label: string;
  index: number;
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
  onChange?: (item: AXADropdownItem) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
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

declare function createAXADropdownReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXADropdownProps>;
