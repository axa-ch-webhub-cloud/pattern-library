import React from 'react';

type Item = {
name: string;
value?: string;
checked?: boolean;
disabled?: boolean;
};

type AXARadioChangeEvent = {
target: Item;
};

export interface AXARadioProps {
  id?: string;
  refId?: string;
  className?: string;
  value?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  button?: boolean;
  noGap?: boolean;
  noAutoWidth?: boolean;
  icon?: string;
  error?: string;
  onChange?: (e: AXARadioChangeEvent) => void;
  onFocus?: (e?: FocusEvent) => {};
  onBlur?: (e?: FocusEvent) => {};
}

declare function createAXARadio(
  createElement: typeof React.createElement
): React.ComponentType<AXARadioProps>;

export default createAXARadio;
